import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&h=1000&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-base/40 via-velmora-base/20 to-velmora-base/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wide mb-4 animate-fade-in">
          Crafted to be<br />Treasured
        </h2>
        <p className="text-white/80 text-sm sm:text-base max-w-md mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Demi-fine jewelry designed for the modern woman. Sustainable, hypoallergenic, and effortlessly elegant.
        </p>
        <Link
          to="/shop"
          className="bg-velmora-gold text-velmora-base px-8 py-4 text-xs tracking-ultra-wide uppercase hover:bg-velmora-gold-light transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
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
