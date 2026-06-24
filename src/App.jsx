import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Specimens from './pages/Specimens';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F2F0E9]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specimens" element={<Specimens />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <footer className="footer">
          <p>© MicroCosmos Archive — Preserving the Invisible Since 1897</p>
          <p className="mt-1 text-xs">Department of Microscopy • Institutional Collection</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
