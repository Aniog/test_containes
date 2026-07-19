import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundColor: '#2a221c' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-7xl text-white tracking-wide leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Warm gold, quiet luxury, and pieces meant to last.
        </p>
        <div className="mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#b08d57] text-white px-8 py-3.5 rounded-full text-sm tracking-widest uppercase hover:bg-[#9a7a48] transition-colors"
          >
            Shop the Collection
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
