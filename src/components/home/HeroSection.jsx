import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white/80 text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-md mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Timeless pieces designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="btn-accent animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
