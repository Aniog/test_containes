import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 select-none">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;