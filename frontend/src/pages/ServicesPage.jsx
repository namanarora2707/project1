import React from 'react';
import { motion } from 'framer-motion';
import { Code, DeviceMobile, CloudArrowUp, ChartLineUp, Sparkle, Database } from '@phosphor-icons/react';

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices. From responsive websites to complex web platforms.',
      features: ['React & Next.js', 'Full-stack solutions', 'API development', 'Performance optimization'],
    },
    {
      icon: DeviceMobile,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
      features: ['React Native', 'iOS & Android', 'UI/UX design', 'App store deployment'],
    },
    {
      icon: CloudArrowUp,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to ensure your applications run smoothly at any scale.',
      features: ['AWS & Azure', 'DevOps automation', 'Containerization', 'CI/CD pipelines'],
    },
    {
      icon: Sparkle,
      title: 'AI & Machine Learning',
      description: 'Harness the power of AI to automate processes, gain insights, and create intelligent applications.',
      features: ['Custom AI models', 'Natural language processing', 'Computer vision', 'Predictive analytics'],
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and warehouses to unlock the full potential of your data.',
      features: ['Data pipeline design', 'ETL processes', 'Real-time analytics', 'Data visualization'],
    },
    {
      icon: ChartLineUp,
      title: 'Digital Strategy',
      description: 'Strategic consulting to help you navigate digital transformation and achieve your business goals.',
      features: ['Technology roadmaps', 'Architecture design', 'Process optimization', 'Team training'],
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
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6" data-testid="services-heading">
              Our
              <br />
              <span className="text-blue-500">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed" data-testid="services-intro">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Bento Layout */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bento-card p-8 bg-zinc-900/50 border border-white/10 rounded-lg"
                  data-testid={`service-card-${index}`}
                >
                  <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={32} weight="duotone" className="text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zinc-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="services-cta-heading">
              Need a Custom Solution?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              We specialize in building tailored solutions that fit your unique business needs. Let's discuss your project.
            </p>
            <a href="/contact" data-testid="services-cta-button">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Let's Talk
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;