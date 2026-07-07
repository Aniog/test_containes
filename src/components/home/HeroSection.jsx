import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&h=900&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-fade-in">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h2 className="serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h2>
        <p className="text-sm sm:text-base text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link to="/shop" className="btn-primary">
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
