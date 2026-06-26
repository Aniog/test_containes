import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/home/HeroSection';
import ProductsSection from './components/products/ProductsSection';
import AboutSection from './components/home/AboutSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warm-bg">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
