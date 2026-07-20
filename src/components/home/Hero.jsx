import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 bg-zinc-200"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl animate-in fade-in zoom-in duration-1000">
        <h1 
          id="hero-title"
          className="text-white font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subtitle"
          className="text-white/90 font-light text-sm md:text-base uppercase tracking-[0.3em] mb-10 max-w-xl mx-auto"
        >
          Demi-fine jewelry for your everyday luxury
        </p>
        <Link to="/shop" className="btn-premium px-12 py-5 text-[11px] bg-white text-zinc-900 hover:bg-zinc-100">
          Shop the Collection
        </Link>
      </div>

      {/* Trust bar overlay at bottom */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center z-20 overflow-hidden px-6">
         <div className="flex space-x-8 md:space-x-16 text-[9px] md:text-[10px] uppercase-widest text-white/70 font-medium">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">•</span>
            <span>Hypoallergenic</span>
         </div>
      </div>
    </section>
  );
};

export default Hero;
