import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velvet-deep/80 via-velvet-deep/40 to-velvet-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <p className="text-velvet-gold text-xs md:text-sm tracking-[0.2em] uppercase font-sans mb-4">
            New Collection
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-velvet-cream leading-tight">
            Crafted to be
            <br />
            <span className="italic font-light">Treasured</span>
          </h1>
          <p className="mt-4 md:mt-6 text-velvet-taupe text-sm md:text-base max-w-md leading-relaxed">
            Demi-fine gold jewelry, handcrafted for the woman who values elegance in every detail. Designed to be worn, loved, and passed on.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/shop" className="btn-primary inline-flex items-center gap-2 group">
              Shop the Collection
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/collections" className="btn-outline">
              Explore
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-velvet-muted">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velvet-muted to-transparent" />
      </div>
    </section>
  );
}