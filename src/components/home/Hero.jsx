import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with stock image */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        data-strk-bg-id="hero-bg-9921"
        data-strk-bg="[hero-headline] [hero-subhead] gold jewelry on model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-in fade-in zoom-in duration-1000">
        <h1 id="hero-headline" className="text-5xl md:text-8xl font-serif mb-6 leading-tight">
          Crafted to be <br /> <span className="italic">Treasured</span>
        </h1>
        <p id="hero-subhead" className="text-sm md:text-base uppercase tracking-[0.3em] font-light mb-10 opacity-90">
          Essential Demi-Fine Jewelry for the Modern Woman
        </p>
        <Link 
          to="/shop" 
          className="bg-white text-black px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-accent hover:text-white transition-luxury inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-white/60 rotate-90">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
