import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto fade-in">
        <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto font-light">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link to="/shop" className="inline-block bg-white text-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
