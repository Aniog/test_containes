import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal opacity-90" />
      
      {/* Warm overlay to simulate gold jewelry lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-cream font-light tracking-wide mb-6 leading-tight">
          Crafted to be<br />
          <span className="font-normal">Treasured</span>
        </h1>
        
        <p className="text-cream/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Demi-fine gold jewelry designed for the modern heirloom. Each piece tells a story of quiet luxury and intentional craftsmanship.
        </p>

        <Link
          to="/shop"
          className="inline-block bg-gold text-cream px-12 py-4 text-sm tracking-widest uppercase font-sans hover:bg-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-cream/30" />
      </div>
    </section>
  );
}
