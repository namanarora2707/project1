const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  console.error('MONGO_URL not found in environment variables');
  process.exit(1);
}

mongoose.connect(MONGO_URL)
  .then(() => console.log('✓ Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Define Schemas
const statusCheckSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  client_name: { type: String, required: true },
  timestamp: { type: Date, default: () => new Date() }
}, { versionKey: false });

const contactSubmissionSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Invalid email format'
    }
  },
  company: { type: String, default: '' },
  message: { type: String, required: true },
  timestamp: { type: Date, default: () => new Date() }
}, { versionKey: false });

// Create Models
const StatusCheck = mongoose.model('StatusCheck', statusCheckSchema, 'status_checks');
const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema, 'contact_submissions');

// API Routes

// Health check endpoint
app.get('/api/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Create status check
app.post('/api/status', async (req, res) => {
  try {
    const { client_name } = req.body;
    
    if (!client_name) {
      return res.status(400).json({ error: 'client_name is required' });
    }

    const statusCheck = new StatusCheck({
      id: uuidv4(),
      client_name,
      timestamp: new Date()
    });

    await statusCheck.save();

    // Return without MongoDB's _id
    const response = {
      id: statusCheck.id,
      client_name: statusCheck.client_name,
      timestamp: statusCheck.timestamp
    };

    res.status(201).json(response);
  } catch (error) {
    console.error('Error creating status check:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all status checks
app.get('/api/status', async (req, res) => {
  try {
    const statusChecks = await StatusCheck.find({}, { _id: 0 }).limit(1000);
    res.json(statusChecks);
  } catch (error) {
    console.error('Error fetching status checks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create contact submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'name, email, and message are required' 
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (message.length < 10) {
      return res.status(400).json({ 
        error: 'Message must be at least 10 characters' 
      });
    }

    const contactSubmission = new ContactSubmission({
      id: uuidv4(),
      name,
      email,
      company: company || '',
      message,
      timestamp: new Date()
    });

    await contactSubmission.save();

    // Return without MongoDB's _id
    const response = {
      id: contactSubmission.id,
      name: contactSubmission.name,
      email: contactSubmission.email,
      company: contactSubmission.company,
      message: contactSubmission.message,
      timestamp: contactSubmission.timestamp
    };

    res.status(201).json(response);
  } catch (error) {
    console.error('Error creating contact submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all contact submissions (optional - for admin)
app.get('/api/contact', async (req, res) => {
  try {
    const submissions = await ContactSubmission.find({}, { _id: 0 })
      .sort({ timestamp: -1 })
      .limit(100);
    res.json(submissions);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server running on http://0.0.0.0:${PORT}`);
  console.log(`✓ API endpoints available at http://0.0.0.0:${PORT}/api`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing HTTP server');
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing HTTP server');
  await mongoose.connection.close();
  process.exit(0);
});