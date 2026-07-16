import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-espresso/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <div className="animate-fade-in max-w-2xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-cream tracking-wide leading-tight text-balance"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-5 md:mt-6 text-sm md:text-base font-sans font-light text-cream/80 max-w-lg mx-auto leading-relaxed"
          >
            Demi-fine gold jewelry designed for everyday elegance. Pieces that
            feel as special as the moments they mark.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 md:mt-10 btn-primary"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-[10px] font-sans uppercase tracking-widest text-cream/60">
          Scroll
        </span>
        <div className="w-px h-8 bg-cream/30" />
      </div>
    </section>
  );
}
