import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Enterprise Dashboard Platform',
      category: 'Web Application',
      description: 'A comprehensive analytics platform serving 10,000+ users with real-time data visualization and reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'AI-Powered Infrastructure',
      category: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure with automated deployment and monitoring for high-availability applications.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      tags: ['Kubernetes', 'Docker', 'Terraform', 'Monitoring'],
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking solution with biometric authentication and real-time transaction processing.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
      tags: ['React Native', 'Security', 'Fintech', 'API Integration'],
    },
    {
      title: 'E-commerce Platform',
      category: 'Full Stack',
      description: 'Multi-vendor marketplace with inventory management, payment processing, and advanced search capabilities.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Microservices'],
    },
    {
      title: 'Healthcare Management System',
      category: 'Enterprise Software',
      description: 'HIPAA-compliant patient management system with appointment scheduling and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
      tags: ['Vue.js', 'Python', 'HIPAA', 'WebRTC'],
    },
    {
      title: 'Marketing Analytics Tool',
      category: 'Data Analytics',
      description: 'Comprehensive marketing analytics platform with campaign tracking and ROI measurement.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      tags: ['Data Pipeline', 'ML', 'Visualization', 'API'],
    },
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
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6" data-testid="portfolio-heading">
              Our
              <br />
              <span className="text-blue-500">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed" data-testid="portfolio-intro">
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                data-testid={`project-card-${index}`}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110">
                    <ArrowUpRight size={20} weight="bold" className="text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-blue-500 tracking-wide uppercase">{project.category}</div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zinc-900/50 border border-white/10 rounded-full text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-zinc-900/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="portfolio-cta-heading">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Join the ranks of successful businesses we've partnered with. Let's build something extraordinary together.
            </p>
            <a href="/contact" data-testid="portfolio-cta-button">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Start Your Project
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;