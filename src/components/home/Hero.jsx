import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] lg:h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-brand-dark-brown"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry model warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 via-brand-charcoal/30 to-brand-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-[11px] sm:text-xs tracking-[0.35em] uppercase text-brand-gold-light mb-5 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brand-cream leading-[1.1] max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm sm:text-base text-brand-warmgray mt-5 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          18K gold-plated jewelry designed for the modern woman. Elegant enough for evenings, effortless enough for every day.
        </p>
        <Link
          to="/shop"
          className="btn-primary mt-8 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-[10px] tracking-[0.3em] uppercase text-brand-warmgray/60">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-warmgray/60 to-transparent" />
      </div>
    </section>
  );
}
