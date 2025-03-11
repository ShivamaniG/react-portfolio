// components/ProjectsGrid.js
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import DJCard from './DJCard';
import './ProjectsGrid.css';

const ProjectsGrid = () => {
  const projects = [
    { id: 1, name: 'Sattelite Imagery for Canal Identification', href: 'https://github.com/ShivamaniG/prj' },
    { id: 2, name: 'Resume Boost', href: '(https://github.com/ShivamaniG/test' },
    { id: 3, name: 'RAG Chatbot', href: 'https://github.com/ShivamaniG/RAG-ChatBot' },
    { id: 4, name: 'BlogCraft', href: 'https://github.com/ShivamaniG/BlogCraft' },
    { id: 5, name: 'Visit My GitHub Page for More Projects', href: 'https://github.com/ShivamaniG' }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        <DJCard />
        
        <div className="right-column">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProjectsGrid;