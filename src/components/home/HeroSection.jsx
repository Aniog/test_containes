import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velmora-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1A1817"/><stop offset="40%" stop-color="#2C2A29"/><stop offset="100%" stop-color="#1A1817"/></linearGradient></defs><rect fill="url(#g)" width="1600" height="900"/></svg>')})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-dark/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-velmora-goldlight mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/60 font-light max-w-md mx-auto mb-10 leading-relaxed">
          18K gold-plated pieces designed for the modern woman. Everyday luxury at an accessible price.
        </p>
        <Link to="/shop" className="velmora-btn-primary">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-velmora-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
