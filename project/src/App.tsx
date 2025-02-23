import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Athletes from './pages/Athletes';
import Donate from './pages/Donate';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App