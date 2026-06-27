import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/80 text-base sm:text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Demi-fine jewelry designed for the modern woman. Quiet luxury, everyday elegance.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-gold text-white text-xs tracking-[0.25em] uppercase hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
