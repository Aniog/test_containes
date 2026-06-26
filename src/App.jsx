import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductList />
      <About />
      <Contact />
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
