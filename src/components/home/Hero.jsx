import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600&auto=format&fit=crop&q=85"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-ink-950/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <span className="inline-block text-xs font-sans font-medium tracking-widest uppercase text-gold-300 mb-4 animate-fade-in">
              Demi-Fine Gold Jewelry
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-tight tracking-wide animate-slide-up">
              Crafted to
              <br />
              <span className="italic">be Treasured</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-cream/80 font-sans font-light leading-relaxed max-w-md animate-fade-in">
              Elevated essentials handcrafted in 18K gold plating. 
              Wardrobe staples that transition from desk to dinner.
            </p>
            <div className="mt-8 animate-slide-up">
              <Link
                to="/collections/all"
                className="inline-flex items-center justify-center px-10 py-4 bg-gold-500 text-ink-950 
                         font-sans text-sm font-medium tracking-wider uppercase
                         transition-all duration-300 ease-out
                         hover:bg-gold-400 active:bg-gold-600
                         shadow-lg shadow-gold-500/20"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cream/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}