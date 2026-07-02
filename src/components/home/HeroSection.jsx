import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-slide-up">
        <p className="text-velmora-200 text-xs tracking-widest uppercase mb-4">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-velmora-100 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Timeless pieces designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="btn-accent">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
