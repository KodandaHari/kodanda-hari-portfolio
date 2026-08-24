import { motion } from 'framer-motion';
import React from 'react';

// TODO: replace with your real work history
const jobs = [
  {
    title: 'AEM Developer',
    company: 'Your Company',
    location: 'City, Country',
    dates: 'Start – Present',
    bullets: [
      'Add a bullet describing a component, template, or workflow you built in AEM.',
      'Add a bullet describing an integration or performance improvement you delivered.'
    ]
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="section bg-surface relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
    >
      <motion.div
        className="absolute -top-16 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-accent/15 to-accent-teal/10 blur-3xl opacity-50 z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="container relative z-10">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {jobs.map((job) => (
            <div key={job.title + job.company} className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1">
                <div className="font-bold text-lg">{job.title}</div>
                <div className="text-text-secondary text-sm">{job.company}, {job.location}</div>
                <div className="text-accent text-sm">{job.dates}</div>
              </div>
              <ul className="list-disc pl-5 text-text-secondary text-sm space-y-1">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
