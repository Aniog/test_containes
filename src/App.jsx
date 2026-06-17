import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Load stock images after component mounts
  useEffect(() => {
    // The strk-img plugin will handle image loading automatically
    // This is just to ensure the DOM is ready
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
