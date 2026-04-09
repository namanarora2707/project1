import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Lightning, Shield, Rocket } from '@phosphor-icons/react';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const features = [
    { icon: Lightning, title: 'Lightning Fast', desc: 'Optimized performance for seamless user experiences' },
    { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security protocols and infrastructure' },
    { icon: Rocket, title: 'Scalable Solutions', desc: 'Built to grow with your business needs' },
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Countries Served' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center hero-bg"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-32 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-balance mb-6"
              data-testid="hero-heading"
            >
              Transform Your Business
              <br />
              <span className="text-blue-500">With Innovation</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
              data-testid="hero-subtitle"
            >
              We build cutting-edge technology solutions that propel your business into the future. From concept to deployment, we're your innovation partner.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" data-testid="hero-cta-primary">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                  Get Started
                  <ArrowRight size={20} weight="bold" />
                </button>
              </Link>
              <Link to="/portfolio" data-testid="hero-cta-secondary">
                <button className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-md font-semibold transition-all">
                  View Our Work
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-testid="stats-section">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`stat-item-${index}`}
              >
                <div className="text-4xl sm:text-5xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="value-prop-heading">
              Why Choose NexaTech?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              We combine technical excellence with strategic thinking to deliver solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bento-card p-8 bg-zinc-900/50 border border-white/10 rounded-lg"
                  data-testid={`feature-card-${index}`}
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} weight="duotone" className="text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="cta-heading">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into reality. Our team is ready to bring your vision to life.
            </p>
            <Link to="/contact" data-testid="cta-button">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;