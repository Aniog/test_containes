import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Introduction from './components/home/Introduction';
import Gallery from './components/home/Gallery';
import Features from './components/home/Features';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 antialiased selection:bg-teal-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Gallery />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
