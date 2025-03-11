// App.js
import React from 'react';
// import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
// import ProjectCard from './components/ProjectCard';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ProjectsGrid />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;