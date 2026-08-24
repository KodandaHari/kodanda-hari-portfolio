import { motion } from 'framer-motion';
import React from 'react';

const jobs = [
  {
    title: 'Senior Software Engineer',
    company: 'Bounteous and Accolite — Guardian Glass Project',
    location: 'Hyderabad, India',
    dates: 'Jan 2026 – Present',
    bullets: [
      'Developed custom AEM components and extended OOTB components using HTL, HTML5, CSS3, SASS, and JavaScript to deliver dynamic, reusable UI functionality.',
      'Built and maintained backend modules using Java, Sling Models, OSGi services, and Sling Servlets, ensuring a modular, cloud-ready architecture in AEMaaCS.',
      'Built reusable content structures using Content Fragments and Experience Fragments, enabling omnichannel publishing through Headless AEM and RESTful endpoints.',
      'Collaborated with UX/UI designers to convert design mockups into responsive, cross-browser AEM components.',
      'Participated in client-facing meetings, gathering requirements and translating business needs into technical solutions.'
    ]
  },
  {
    title: 'Senior AEM Developer',
    company: 'Infosys Limited — Coca-Cola Project',
    location: 'Hyderabad, India',
    dates: 'Aug 2024 – Jan 2026',
    bullets: [
      'Automated business processes by writing custom workflows, workflow steps, process implementations, and workflow launchers with configurable behavior.',
      'Set up Dispatcher rules, caching/invalidation strategies, filter rules, and rewrite rules to optimize content delivery and reduce load on publish instances.',
      'Enhanced reliability through Sling Event Handlers, Event Listeners, and Schedulers for asynchronous content management tasks.',
      'Integrated Adobe Experience Platform (AEP), Adobe Launch, Adobe Target, and Adobe Analytics into AEM, enabling data-driven personalized content experiences and audience segmentation.',
      'Integrated third-party systems through REST APIs and implemented JSON Exporter with Sling Models, optimizing headless responses for web and mobile apps.'
    ]
  },
  {
    title: 'AEM Developer',
    company: 'Tata Consultancy Services — Virgin Atlantic Airways Project',
    location: 'Hyderabad, India',
    dates: 'Jul 2021 – Aug 2024',
    bullets: [
      'Built Editable Templates by configuring structure components, initial content, and template policies for consistent design governance.',
      'Built Touch UI dialogs with validations, optimized client libraries for efficient CSS/JS loading, and integrated the Style System for consistent UI design.',
      'Managed on-prem/AMS author-publish-dispatcher setup, handling replication, activations, and cache invalidations for content synchronization.',
      'Configured DAM workflows, asset folder structures, and metadata schemas, improving asset accessibility across teams.',
      'Ensured WCAG and ADA compliance by developing accessible components and testing across devices.',
      'Analyzed JVM heap dumps to optimize memory usage and enforced code quality/security with SonarQube and CodeQL in CI/CD pipelines.'
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
