// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-container">
          <div className="hero-text">
            <h2>Pioneer Revolutionizing</h2>
            <h3>Building the Future with <span>AI-Driven</span></h3>
            <h3>Software Systems</h3>
          </div>
          <img className="top-right-photo" src="/photo.png" alt="Profile" />
        </div>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2>Not Your Typical Portfolio</h2>
        <h3>Adaptable to New Skills</h3>
        <h3>It’s About Problem-Solving.</h3>
      </motion.div>
    </div>
  );
};

export default Hero;
