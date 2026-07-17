import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=900&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <p className="text-white/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-6">
            Demi-Fine Jewelry
          </p>
          <h1 className="velmora-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 leading-tight">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed">
            Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
          </p>
          <Link to="/shop" className="velmora-btn-primary bg-white text-[var(--velmora-text)] hover:bg-[var(--velmora-gold)] hover:text-white">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
