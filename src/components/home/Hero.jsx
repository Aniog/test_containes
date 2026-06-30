import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        data-strk-bg-id="hero-bg"
        data-strk-bg="[hero-title] close up gold jewelry on model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-neutral-200"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-12 text-white">
        <h1 
          id="hero-title"
          className="text-4xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-base md:text-xl font-sans tracking-wide max-w-xl mb-10 opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Discover a collection of demi-fine jewelry designed for every occasion and every woman.
        </p>
        <Link
          to="/shop"
          className="bg-white text-velmora-obsidian px-10 md:px-12 py-4 md:py-5 text-sm uppercase tracking-[0.2em] font-bold hover:bg-velmora-obsidian hover:text-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-60">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};

export default Hero;
