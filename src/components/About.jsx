import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <motion.section
      id="about"
      className="section bg-surface relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
    >
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-accent/20 to-accent-teal/10 blur-3xl opacity-60 z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          {/* TODO: replace with your own 2-3 sentence summary */}
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            AEM Developer. Add a short summary of your background, the kind of work you enjoy,
            and what you're focused on right now.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-accent">Education</h3>
            {/* TODO: replace with your real education history */}
            <div className="mb-4">
              <div className="font-bold text-text-primary">Your Degree</div>
              <div className="text-text-secondary">Your University, Start – End</div>
              <div className="text-text-muted text-sm">Add GPA / coursework here if you'd like</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-accent">Certifications</h3>
            {/* TODO: e.g. Adobe Certified Master - AEM Sites Architect, if applicable */}
            <div className="text-text-secondary text-sm">
              Add certifications relevant to your role here.
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
