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
  return (
    <>
        <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projek" element={<Projek />} />
        <Route path="/portfolio/tools" element={<Tools />} />
      </Routes>
    </Router>
    {/* <Home /> */}

    </>
  );
}

export default App;
