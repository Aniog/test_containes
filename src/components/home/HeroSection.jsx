import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-section-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 w-full">
        <div className="max-w-lg">
          <p className="font-sans text-[11px] md:text-xs tracking-[0.3em] uppercase text-cream/70 mb-6 animate-fade-in">
            New Collection
          </p>
          <h1
            id="hero-section-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-6 animate-fade-in animate-delay-100"
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream/70 text-sm md:text-base leading-relaxed mb-8 animate-fade-in animate-delay-200 max-w-md"
          >
            Demi-fine gold jewelry designed for the woman who collects moments, not things. 18K gold-plated, hypoallergenic, and made to last.
          </p>
          <Link
            to="/shop"
            className="btn-gold animate-fade-in animate-delay-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-500">
        <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50">Scroll</span>
        <div className="w-px h-8 bg-cream/20" />
      </div>
    </section>
  );
}
