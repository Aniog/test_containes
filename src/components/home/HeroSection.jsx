import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=900&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-white/80 text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/80 text-base md:text-lg mb-10 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          18K gold plated pieces designed for the modern woman. Everyday luxury, accessible to all.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-[#b8860b] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#9a7209] transition-all duration-300 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border border-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
