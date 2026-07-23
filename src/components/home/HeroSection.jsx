import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(26,23,20,0.3), rgba(26,23,20,0.5)), url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white/80 font-light">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
          Crafted to<br />be Treasured
        </h1>
        <p className="text-base md:text-lg text-white/80 font-light mb-10 max-w-lg mx-auto leading-relaxed">
          Everyday luxury in 18K gold plated pieces designed for the modern woman.
        </p>
        <Link to="/shop" className="btn-primary bg-white text-[#1A1714] hover:bg-white/90">
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
};

export default HeroSection;
