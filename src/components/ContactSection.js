// components/ContactSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  const socialLinks = [
    { id: 2, name: 'EMAIL', url: 'https://mail.google.com/mail/?view=cm&to=shivamanigangarapu@gmail.com' },
    { id: 3, name: 'LINKEDIN', url: 'https://www.linkedin.com/in/shivamani-gangarapu/' } ,
    { id: 1, name: 'INSTAGRAM', url: 'https://instagram.com' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="contact-box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            // scale: 1.02,
            // boxShadow: "0 10px 20px rgba(0,0,0,0.1)" 
          }}
        >
          <div className="question-text">
            <p>Have a</p>
            <p>Question??</p>
          </div>

          <motion.h2 
            className="contact-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Contact Me
          </motion.h2>

          <div className="social-links">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
