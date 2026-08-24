import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLayerGroup } from 'react-icons/fa';

// TODO: replace with your real projects
const projects = [
  {
    title: 'Project One',
    description: 'Add a one-line description of what this project does.',
    tech: ['AEM', 'Java', 'HTL'],
    highlights: ['Add a highlight or metric', 'Add another highlight'],
    github: 'https://github.com/KodandaHari'
  },
  {
    title: 'Project Two',
    description: 'Add a one-line description of what this project does.',
    tech: ['React', 'Node.js'],
    highlights: ['Add a highlight or metric', 'Add another highlight'],
    github: 'https://github.com/KodandaHari'
  }
];

const ProjectCard = ({ project }) => (
  <motion.div className="card h-full flex flex-col group overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <div className="relative h-32 mb-4 overflow-hidden rounded-t-2xl bg-surface-dark flex items-center justify-center">
      <FaLayerGroup className="text-4xl text-accent/60" />
    </div>

    <div className="p-6 flex-grow">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-text-secondary mb-4">{project.description}</p>

      <div className="mb-4">
        <h4 className="font-medium mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="text-text-secondary flex items-start">
              <span className="text-accent mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-surface-dark text-text-secondary rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="p-6 border-t border-white/10">
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-accent hover:text-accent-light transition-colors">
        <FaGithub className="mr-2" />
        View on GitHub
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="section bg-surface relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
    >
      <motion.div
        className="absolute -bottom-16 left-0 w-80 h-80 rounded-full bg-gradient-to-br from-accent/15 to-accent-teal/10 blur-3xl opacity-50 z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Showcase of projects you've worked on</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.title} className="h-full" whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200, damping: 18 }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
