import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Solid fallback background */}
      <div className="absolute inset-0 bg-velmora-charcoal" />

      {/* Background image via strk system */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal via-velmora-charcoal/50 to-velmora-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-gold/10 via-transparent to-velmora-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-superwide uppercase text-velmora-goldlight mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-[1.1] mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Gold jewelry designed for everyday elegance. 18K gold-plated, hypoallergenic, 
          and made to move with you — from morning coffee to evening light.
        </p>
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="w-px h-10 bg-velmora-gold/40 mx-auto" />
        <span className="block text-[10px] tracking-superwide uppercase text-velmora-gold/50 mt-3">Scroll</span>
      </div>
    </section>
  );
}
