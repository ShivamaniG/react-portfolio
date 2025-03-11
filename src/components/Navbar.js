// components/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-logo">
        <h1>SHIVAMANI <span>GANGARAPU</span></h1>
      </div>
      <div className="nav-links">
        <motion.a 
          href="#projects" 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          PROJECTS
        </motion.a>
        <motion.a 
          href="#about" 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ABOUT
        </motion.a>
        <motion.a 
          href="#contact" 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          CONTACT
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;