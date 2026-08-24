import { motion } from 'framer-motion';
import React from 'react';
import { FaAws, FaCloud, FaCode, FaDatabase, FaGitAlt, FaJava, FaLayerGroup, FaServer } from 'react-icons/fa';

// TODO: adjust proficiency numbers and entries to match your actual experience
const skillSections = [
  {
    icon: FaLayerGroup,
    title: 'AEM',
    skills: [
      { name: 'AEM / CQ5', proficiency: 85 },
      { name: 'Sling', proficiency: 80 },
      { name: 'OSGi', proficiency: 80 },
      { name: 'HTL / Sightly', proficiency: 85 },
      { name: 'JCR / CRXDE', proficiency: 80 },
      { name: 'Dispatcher', proficiency: 70 }
    ]
  },
  {
    icon: FaCode,
    title: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava, proficiency: 85 },
      { name: 'JavaScript', proficiency: 75 },
      { name: 'HTML/CSS', proficiency: 75 }
    ]
  },
  {
    icon: FaServer,
    title: 'Frameworks',
    skills: [
      { name: 'Spring', proficiency: 70 },
      { name: 'JUnit', proficiency: 70 }
    ]
  },
  {
    icon: FaDatabase,
    title: 'Data',
    skills: [
      { name: 'MySQL', proficiency: 70 },
      { name: 'MongoDB', proficiency: 65 }
    ]
  },
  {
    icon: FaCloud,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AEM as a Cloud Service', proficiency: 75 },
      { name: 'AWS', icon: FaAws, proficiency: 65 },
      { name: 'Git', icon: FaGitAlt, proficiency: 80 },
      { name: 'CI/CD', proficiency: 70 }
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
              <div className="space-y-3">
                {section.skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {skill.icon ? (
                          <skill.icon className="text-accent text-sm" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-accent/50" />
                        )}
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-text-secondary">{skill.proficiency}%</span>
                    </div>
                    <motion.div
                      className="h-2 rounded bg-accent/20 overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.proficiency + '%' }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-full bg-accent" style={{ width: '100%' }} />
                    </motion.div>
                  </div>
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
