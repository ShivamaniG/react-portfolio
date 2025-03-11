// components/DJCard.js
import React from 'react';
import { motion } from 'framer-motion';
import './DJCard.css';

const DJCard = () => {
  return (
    <motion.div 
      className="dj-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)" 
      }}
    >
      <h3>Shivamani G – Innovator. Developer. Explorer.</h3>
      <p>
        Passionate about software development with hands-on experience in 
        <strong> Software Development</strong> and <strong>Machine Learning </strong>. 
        I’ve honed my skills through multiple projects and internships, pushing 
        boundaries and embracing new challenges.
      </p>
      <ul>
        <li><strong>Backend Developer</strong> at a Quick E-Commerce Startup</li>
        <li><strong>Software Developer Intern</strong> at Compci Technologies & Solutions</li>
        <li><strong>Research Intern</strong> at Hyderabad Central University</li>
      </ul>
      <p>
        Every experience and project has shaped my <strong>problem-solving mindset</strong>, giving 
        me <strong>practical exposure</strong> to cutting-edge tech. I'm not confined to 
        a single domain—I thrive on <strong>continuous learning, innovation, and adaptability</strong>. 
        The journey never stops.
      </p>
    </motion.div>
  );  
};

export default DJCard;