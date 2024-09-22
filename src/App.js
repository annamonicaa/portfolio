import './App.css';
import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projek from './components/Project';
import ProjectQA from './components/ProjectQA';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const sections = [
    { ref: homeRef, label: "Home", component: <Home /> },
    { ref: aboutRef, label: "About", component: <About /> },
    { ref: projectsRef, label: "Project", component: <Projek /> },
  ];

  const scrollToSection = (index) => {
    sections[index].ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const Navbar = () => {
    const [isResponsive, setIsResponsive] = useState(false);

    const toggle = () => {
      setIsResponsive(!isResponsive);
    };

    return (
      <div className={`navbar ${isResponsive ? 'responsive' : ''}`} id='navbar'>
        {sections.map((section, index) => (
          <a key={index} onClick={() => scrollToSection(index)}>
            {section.label}
          </a>
        ))}
        <Link to="/project-qa">Project QA</Link> {/* This will navigate to ProjectQA route */}
        <a onClick={toggle} className='icon'>
          <i className='fa fa-bars'></i>
        </a>
      </div>
    );
  };

  return (
    <Router>
      <Navbar />
      {sections.map((section, index) => (
        <div key={index} ref={section.ref}>
          {section.component}
        </div>
      ))}
      
      <Routes>
        <Route path="/project-qa" element={<ProjectQA />} />
      </Routes>
    </Router>
  );
}

export default App;
