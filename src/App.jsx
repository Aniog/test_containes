import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Products from '@/components/products/Products';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Footer from '@/components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#2C3E50]">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
