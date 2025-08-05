import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsRow from './components/ProjectsRow';
import ExperienceRow from './components/ExperienceRow';
import SkillsRow from './components/SkillsRow';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <motion.div 
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <About />
        <ProjectsRow />
        <ExperienceRow />
        <SkillsRow />
        <Certifications />
        <ContactSection />
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;
