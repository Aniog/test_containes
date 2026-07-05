import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&h=1000&fit=crop&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm md:text-base text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="inline-block bg-[#B8860B] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#9A7209] transition-all duration-300">
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
