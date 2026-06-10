import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuoteClick = (productName = null) => {
    setSelectedProduct(productName);
    
    // Scroll to contact section after a brief delay to allow state update
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition - bodyRect - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar onQuoteClick={handleQuoteClick} />
      <Hero onQuoteClick={handleQuoteClick} />
      <About />
      <Products onQuoteClick={handleQuoteClick} />
      <Features />
      <WhyUs />
      <Contact preselectedProduct={selectedProduct} />
      <Footer />
    </div>
  );
}

export default App;
