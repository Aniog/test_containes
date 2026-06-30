import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-velmora-espresso">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10" />
        <img
          alt="Velmora Fine Jewelry Hero"
          data-strk-img-id="velmora-hero-bg-a1b2c3"
          data-strk-img="Velmora Fine Jewelry"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <p className="text-velmora-gold text-xs md:text-sm font-sans tracking-[0.2em] uppercase mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-[1.15] tracking-tight animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/70 text-sm md:text-base font-light mb-10 max-w-md mx-auto leading-relaxed animate-slide-up">
          18K gold-plated demi-fine pieces designed for the modern woman. Everyday luxury, accessible elegance.
        </p>
        <Link to="/shop" className="btn-primary animate-slide-up">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
