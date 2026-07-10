import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10">
        <div className="max-w-xl">
          <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
            New Collection
          </span>
          <h1 className="font-serif text-display text-white mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-lg text-white/80 mb-8 max-w-md leading-relaxed">
            Discover our collection of demi-fine gold jewelry, designed for everyday elegance and moments that matter.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/collection"
              className="inline-block bg-gold text-white px-10 py-4 font-sans font-medium tracking-wide transition-all duration-300 hover:bg-gold-hover hover:shadow-lg"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-white font-sans font-medium tracking-wide transition-colors hover:text-gold"
            >
              Our Story
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="font-sans text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
