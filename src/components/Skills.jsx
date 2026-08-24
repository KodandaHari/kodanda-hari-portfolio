import { motion } from 'framer-motion';
import React from 'react';
import { FaCloud, FaCode, FaGitAlt, FaJava, FaLayerGroup, FaPuzzlePiece, FaReact, FaServer } from 'react-icons/fa';

const skillSections = [
  {
    icon: FaCode,
    title: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'HTL' }
    ]
  },
  {
    icon: FaReact,
    title: 'Frontend',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'SASS' },
      { name: 'jQuery' },
      { name: 'ReactJS', icon: FaReact }
    ]
  },
  {
    icon: FaLayerGroup,
    title: 'AEM & CMS',
    skills: [
      { name: 'AEMaaCS' },
      { name: 'AEM On-Prem' },
      { name: 'Sling Models' },
      { name: 'OSGi' },
      { name: 'Servlets' },
      { name: 'Content Fragments' },
      { name: 'Experience Fragments' },
      { name: 'Dispatcher' },
      { name: 'MSM' },
      { name: 'DAM' },
      { name: 'Headless AEM' }
    ]
  },
  {
    icon: FaPuzzlePiece,
    title: 'Adobe Integrations',
    skills: [
      { name: 'Adobe Experience Platform (AEP)' },
      { name: 'Adobe Launch' },
      { name: 'Adobe Target' },
      { name: 'Adobe Analytics' }
    ]
  },
  {
    icon: FaServer,
    title: 'Backend & APIs',
    skills: [
      { name: 'JSP' },
      { name: 'RESTful APIs' },
      { name: 'JUnit' },
      { name: 'Workflows' },
      { name: 'Schedulers' },
      { name: 'Event Listeners' }
    ]
  },
  {
    icon: FaCloud,
    title: 'DevOps & Tools',
    skills: [
      { name: 'Maven' },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Jenkins' },
      { name: 'CI/CD Pipelines' },
      { name: 'SonarQube' },
      { name: 'CodeQL' },
      { name: 'Azure Boards' },
      { name: 'IntelliJ IDEA' },
      { name: 'VS Code' },
      { name: 'Eclipse' }
    ]
  }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="section bg-surface-dark relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
    >
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="text-2xl text-accent" />
                <h3 className="font-semibold">{section.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-dark text-text-secondary rounded-full text-sm"
                  >
                    {skill.icon && <skill.icon className="text-accent text-xs" />}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
