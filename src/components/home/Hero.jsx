import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-brand-charcoal"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-sub] luxury gold jewelry close up model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      <div className="relative z-20 text-center text-white px-6">
        <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Crafted to be Treasured
        </h1>
        <p id="hero-sub" className="font-sans text-sm md:text-base uppercase tracking-widest mb-10 max-w-xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Demi-fine jewelry designed for life's meaningful moments.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-brand-charcoal px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-gold hover:text-white transition-all duration-500 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
