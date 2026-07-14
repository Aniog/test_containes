import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] md:h-screen min-h-[600px] overflow-hidden -mt-16 md:-mt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&q=85"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight font-light tracking-wide">
              Crafted to be
              <br />
              <span className="font-medium italic">Treasured</span>
            </h1>
            <p className="mt-4 md:mt-6 text-white/80 font-sans text-sm md:text-base leading-relaxed max-w-md">
              Demi-fine gold jewelry, handcrafted for the modern woman. 
              Where timeless elegance meets everyday luxury.
            </p>
            <div className="mt-8 md:mt-10">
              <Link
                to="/shop"
                className="inline-block bg-white text-warm-black px-10 py-3.5 font-sans text-sm font-medium uppercase tracking-widest
                           transition-all duration-300 hover:bg-gold hover:text-white"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}