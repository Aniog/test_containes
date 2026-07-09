import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-black/30 z-10" 
        data-strk-bg-id="hero-overlay-9f2a8c"
      />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        data-strk-bg-id="hero-bg-9f2a8c"
        data-strk-bg="[hero-title] close-up gold jewelry luxury editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 
          id="hero-title"
          className="text-white text-5xl md:text-8xl font-serif mb-6 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-sans mb-10 tracking-wide max-w-2xl mx-auto font-light">
          Demi-fine jewelry designed for your daily moments and grandest memories.
        </p>
        <button 
          onClick={() => navigate('/shop')}
          className="bg-white text-black px-12 py-4 text-xs uppercase tracking-[0.3em] font-semibold hover:bg-white/90 transition-all duration-300 hover:tracking-[0.4em]"
        >
          Shop the Collection
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <div className="w-[1px] h-12 bg-white/40 mb-2" />
        <span className="text-white/40 text-[10px] uppercase tracking-widest font-sans">Scroll</span>
      </div>
    </section>
  );
};
