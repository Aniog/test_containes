import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <p className="text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="velmora-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed slide-up" style={{ animationDelay: '0.2s' }}>
          Everyday luxury in 18K gold plated pieces designed for the modern woman. From $38.
        </p>
        <div className="slide-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/shop" className="velmora-btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
}
