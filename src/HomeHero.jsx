import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-center">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wide leading-tight mb-6 animate-slide-up">
          Crafted to be<br className="md:hidden" /> Treasured
        </h1>
        <p id="hero-subtitle" className="text-white/80 text-sm md:text-base font-light tracking-wider max-w-md mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Demi-fine gold jewelry for the modern woman — designed in Paris, plated in 18K gold.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
