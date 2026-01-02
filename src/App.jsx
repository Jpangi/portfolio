import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/common/Navbar';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
