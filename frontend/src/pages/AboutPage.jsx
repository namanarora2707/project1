import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendUp, Heart } from '@phosphor-icons/react';

const AboutPage = () => {
  const values = [
    { icon: Target, title: 'Mission Driven', desc: 'Focused on delivering measurable impact for every client' },
    { icon: Users, title: 'Client-Centric', desc: 'Your success is our success. We partner for the long term' },
    { icon: TrendUp, title: 'Innovation First', desc: 'Always exploring new technologies and methodologies' },
    { icon: Heart, title: 'People Focused', desc: 'Building a culture of excellence and collaboration' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NzU1ODY5MTd8MA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1762522926157-bcc04bf0b10a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NzU1ODY5MTd8MA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Emily Watson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1771898343647-bd979ad8cca5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NzU1ODY5MTd8MA&ixlib=rb-4.1.0&q=85',
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
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6" data-testid="about-heading">
              Building the Future,
              <br />
              <span className="text-blue-500">Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed" data-testid="about-intro">
              Founded in 2018, NexaTech has grown from a small startup to a leading technology partner for businesses worldwide. We're driven by a passion for innovation and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/358530/pexels-photo-358530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Modern office building"
                className="rounded-lg border border-white/10"
                data-testid="about-image"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="story-heading">
                Our Story
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  What started as a vision to democratize technology has evolved into a mission-driven company serving clients across 15 countries. We've delivered over 500 successful projects, each one reinforcing our belief that technology should empower, not complicate.
                </p>
                <p>
                  Our team of 50+ passionate technologists, designers, and strategists work collaboratively to solve complex challenges. We don't just build software—we build relationships and long-term partnerships.
                </p>
                <p>
                  Today, NexaTech stands at the forefront of digital transformation, helping businesses navigate the ever-changing technology landscape with confidence and clarity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="values-heading">
              Our Core Values
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-zinc-900/50 border border-white/10 rounded-lg"
                  data-testid={`value-card-${index}`}
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} weight="duotone" className="text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="team-heading">
              Meet Our Leadership
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              The visionaries driving NexaTech forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
                data-testid={`team-member-${index}`}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-zinc-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;