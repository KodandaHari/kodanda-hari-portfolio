import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

// TODO: replace with your real profile URLs
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/KodandaHari', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/your-linkedin/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:your-email@example.com', label: 'Email' }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: this form has no backend wired up yet — it just resets the fields.
    // Hook it up to a form service (e.g. Formspree) or your own endpoint before relying on it.
    alert('Thanks for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      id="contact"
      className="section bg-surface-dark relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
    >
      <div className="container max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-text-secondary">I'm open to new opportunities and collaborations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-text-secondary mb-6">Reach out through any of these channels or use the form.</p>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                  <link.icon className="w-5 h-5 mr-3" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-text-primary font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-black px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-primary font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-black px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full text-black px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <button type="submit" className="button-primary w-full">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
