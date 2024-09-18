import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Projek from './components/Project';
import Tools from './components/Tools';

function App() {
  const sections = [
    { ref: useRef(null), label: "About", component: <About /> },
    { ref: useRef(null), label: "Project", component: <Projek /> },
  ];

  const scrollToSection = (index) => {
    sections[index].ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggle = () => {
    var x = document.getElementById('navbar');
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar"
    }
  }

  return (
    <>
      <div className='navbar' id='navbar'>
        <a>Home</a>
        {sections.map((section, index) => (
          <a key={index} onClick={() => scrollToSection(index)}>
            {section.label}
          </a>
        ))}
        <a href='javascript:void(0)' onClick={toggle} className='icon'><i className='fa fa-bars'></i></a>
      </div>
      <div><Home /></div>
      {sections.map((section, index) => (
        <div key={index} ref={section.ref}>
          {section.component}
        </div>
      ))}
      {/* <div ref={aboutRef}><About /></div>
      <div ref={projekRef}><Projek /></div> */}
      {/* <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projek" element={<Projek />} />
        <Route path="/portfolio/tools" element={<Tools />} />
      </Routes>
    </Router> */}
    {/* <Home /> */}

    </>
  );
}

export default App;
