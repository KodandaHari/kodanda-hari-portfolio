import { motion } from 'framer-motion';
import React from 'react';

const certifications = [
  'AD0-E117: Adobe Experience Manager Sites Architect Master',
  'AD0-E128: Adobe Experience Manager Sites Developer Professional',
  'Claude Certified Architect – Foundations'
];

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
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Full Stack AEM Developer with 5+ years of experience building and integrating enterprise
            websites using AEM on-premise and AEMaaCS. Skilled across frontend (HTML5, CSS3, SASS,
            JavaScript, HTL, React) and backend (Java, Sling Models, OSGi, Servlets, workflows,
            schedulers) development, with hands-on experience in headless AEM, REST APIs, Dispatcher
            configuration, DAM management, and integrations with Adobe Analytics, Target, and Launch.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-accent">Education</h3>
            <div className="mb-4">
              <div className="font-bold text-text-primary">B.Tech in Computer Science</div>
              <div className="text-text-secondary">Bapatla Engineering College, 2017 – 2021</div>
            </div>
            <div>
              <div className="font-bold text-text-primary">Intermediate, Mathematics and Computers</div>
              <div className="text-text-secondary">Jawahar Navodaya Vidyalaya, 2015 – 2017</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-accent">Certifications</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
