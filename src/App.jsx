import React from 'react';
import Navbar from '@/components/Navbar.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ProductsSection from '@/components/ProductsSection.jsx';
import FeaturesSection from '@/components/FeaturesSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-off-white font-body">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
