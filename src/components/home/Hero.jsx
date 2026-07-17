import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-neutral-900"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-90 animate-fade-in text-[#FDFCFB]">Velmora Fine Jewelry</h2>
        <h1 id="hero-title" className="text-5xl md:text-8xl font-serif mb-8 max-w-4xl mx-auto leading-tight transition-all duration-1000 translate-y-0 opacity-100">
          Crafted to be <br className="hidden md:block" /> Treasured
        </h1>
        <p className="text-sm md:text-lg font-light tracking-widest uppercase mb-12 opacity-80 max-w-xl mx-auto">
          Demi-fine gold jewelry for every occasion.
        </p>
        <Link 
          to="/shop" 
          className="bg-[#C5A059] text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all hover:bg-[#B38D46] hover:scale-105 shadow-xl inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 animate-bounce">
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
