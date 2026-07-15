import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-charcoal">
        <div 
          className="absolute inset-0 opacity-60"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="gold jewelry luxury closeup warm lighting editorial model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream section-padding max-w-4xl mx-auto">
        <p 
          className="text-xs uppercase tracking-widest mb-4 opacity-80"
          style={{ letterSpacing: '0.3em' }}
        >
          Demi-Fine Jewelry
        </p>
        <h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="text-base sm:text-lg text-cream/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Premium 18K gold-plated jewelry designed for everyday elegance. 
          Accessible luxury that lasts.
        </p>
        <Link to="/shop" className="btn-gold inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-cream/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
}
