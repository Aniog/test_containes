import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [preselectedProduct, setPreselectedProduct] = useState(null);

  const handleRequestQuote = (product) => {
    setPreselectedProduct(product.name);
    
    // Scroll to contact section
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
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
    }, 100);

    // Clear preselected product after a delay so user can change it
    setTimeout(() => {
      setPreselectedProduct(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a252f] font-sans">
      <Navbar />
      <Hero />
      <Products onRequestQuote={handleRequestQuote} />
      <Features />
      <About />
      <Contact preselectedProduct={preselectedProduct} />
      <Footer />
    </div>
  );
}

export default App;
