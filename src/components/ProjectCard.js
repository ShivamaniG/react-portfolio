// components/ProjectCard.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Sample project details - replace with actual data
  const projectDetails = {
    "Sattelite Imagery for Canal Identification": {
      description: "Leveraging satellite imagery and AI to detect and map canal for efficient water resource management.",
      technologies: ["Deep Learning", "Machine Learning", "Python", "OpenCV"],
    },
    "Resume Boost": {
      description: "An AI-powered tool that enhances resumes by analyzing job descriptions and optimizing keywords for ATS compatibility.",
      technologies: ["React", "Tailwind CSS", "Flask", "Google API"],
    },
    "RAG Chatbot": {
      description: "A Retrieval-Augmented Generation (RAG) chatbot that provides intelligent responses by fetching relevant documents",
      technologies: ["LLMs", "LangChain", "Python", "OpenAI API"],
    },
    "BlogCraft": {
      description: " A full-stack MERN blogging platform with CRUD applications to multiple users.",
      technologies: ["MERN","Tailwind CSS"],
    },
    "Visit My GitHub Page for More Projects": {
      description: "Explore my GitHub page to see a diverse range of projects, including both mini and major projects, where I have applied and honed various technical skills through hands-on implementation.",
      technologies: [],
    }
  };
  
  
  const currentProject = projectDetails[project.name] || {
    description: "Project details coming soon...",
    technologies: [],
    image: null
  };

  return (
    <div 
      className="project-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="project-card"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <h3>{project.name}</h3>
        <div className="card-separator" />
      </motion.div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="project-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-details-content">
              <p className="project-description">{currentProject.description}</p>
              
              {currentProject.technologies.length > 0 && (
                <div className="project-technologies">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-tags">
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;