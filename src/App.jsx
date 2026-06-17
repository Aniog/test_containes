import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Machines from './components/Machines';
import Engineering from './components/Engineering';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Machines />
        <Engineering />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
