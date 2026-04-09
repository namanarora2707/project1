import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, Phone, MapPin, PaperPlaneTilt } from '@phosphor-icons/react';
import axios from 'axios';

// Vite uses import.meta.env instead of process.env
// All env variables must be prefixed with VITE_
const API_URL = import.meta.env.VITE_API_URL || '';
const API = `${API_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: EnvelopeSimple, label: 'Email', value: 'hello@nexatech.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6" data-testid="contact-heading">
              Let's
              <br />
              <span className="text-blue-500">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed" data-testid="contact-intro">
              Ready to start your next project? We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6" data-testid="contact-info-heading">
                  Get in Touch
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Have a question or want to work together? We're here to help bring your ideas to life.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} weight="duotone" className="text-blue-500" />
                      </div>
                      <div>
                        <div className="text-sm text-zinc-500 mb-1">{info.label}</div>
                        <div className="text-zinc-200">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      data-testid="contact-name-input"
                      className={`w-full px-4 py-3 bg-zinc-950 border ${
                        errors.name ? 'border-red-500' : 'border-white/20'
                      } rounded-md text-zinc-50 focus:border-blue-500 focus:outline-none transition-colors`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1" data-testid="name-error">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      data-testid="contact-email-input"
                      className={`w-full px-4 py-3 bg-zinc-950 border ${
                        errors.email ? 'border-red-500' : 'border-white/20'
                      } rounded-md text-zinc-50 focus:border-blue-500 focus:outline-none transition-colors`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1" data-testid="email-error">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    data-testid="contact-company-input"
                    className="w-full px-4 py-3 bg-zinc-950 border border-white/20 rounded-md text-zinc-50 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    data-testid="contact-message-input"
                    className={`w-full px-4 py-3 bg-zinc-950 border ${
                      errors.message ? 'border-red-500' : 'border-white/20'
                    } rounded-md text-zinc-50 focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1" data-testid="message-error">{errors.message}</p>}
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-900/20 border border-green-500/50 rounded-md text-green-400" data-testid="success-message">
                    Thank you! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-md text-red-400" data-testid="error-message">
                    Something went wrong. Please try again.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  data-testid="contact-submit-button"
                  className={`w-full px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold flex items-center justify-center gap-2 transition-all ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <PaperPlaneTilt size={20} weight="bold" />}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;