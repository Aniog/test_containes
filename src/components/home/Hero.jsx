import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden -mt-20 md:-mt-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-xl animate-fade-in">
            <p className="text-gold-light text-sm md:text-base uppercase tracking-[0.2em] font-sans font-medium mb-4">
              Demi-Fine Gold Jewelry
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream-50 leading-[1.1] mb-6">
              Crafted to
              <br />
              <span className="font-semibold italic">be Treasured</span>
            </h1>
            <p className="text-cream-50/80 text-base md:text-lg font-sans font-light leading-relaxed mb-10 max-w-md">
              Everyday elegance in 18K gold plating. Designed for the woman who values quality, craft, and quiet luxury.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-charcoal-900 px-10 py-4 font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-50/40 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-cream-50/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}