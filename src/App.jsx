import React from 'react';
import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Products from '@/components/products/Products';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';

function App() {
  const handleRequestQuote = (productName) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill the product select after scroll
      setTimeout(() => {
        const select = document.querySelector('select[name="product"]');
        if (select && productName) {
          select.value = productName;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#2d3748]">
      <Navbar />
      <Hero />
      <About />
      <Products onRequestQuote={handleRequestQuote} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
