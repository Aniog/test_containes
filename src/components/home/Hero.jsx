import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with warm gold jewelry imagery */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry luxury editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-cream/80 text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-4 md:mb-6"
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream/80 text-sm md:text-base max-w-md mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Timeless pieces designed for the modern woman. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-white px-10 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-gold-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
