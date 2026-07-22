import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <p className="text-cream/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light leading-[1.1] max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream/70 text-sm md:text-base mt-4 md:mt-6 max-w-md leading-relaxed"
        >
          Demi-fine gold jewelry designed for everyday elegance and lasting moments.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block bg-gold text-cream px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-cream/40 animate-pulse" />
      </div>
    </section>
  );
}
