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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto fade-in">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-white/70">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="serif-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm md:text-base text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="inline-block bg-[var(--velmora-accent)] text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[var(--velmora-accent-hover)] transition-all duration-300 hover:shadow-xl">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
