import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with stock image */}
      <div
        className="absolute inset-0 bg-velmora-charcoal"
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry woman elegant"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-velmora-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <p className="text-velmora-goldlight text-xs md:text-sm tracking-[0.2em] uppercase mb-5 animate-fade-in-up">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-velmora-ivory leading-[1.1] mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-velmora-sand text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Timeless gold pieces designed for everyday elegance and moments that matter.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-velmora-gold text-velmora-charcoal text-xs tracking-widest uppercase font-semibold hover:bg-velmora-goldlight transition-colors duration-300 rounded-sm animate-fade-in-up"
          style={{ animationDelay: '0.45s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-velmora-ivory/40" />
      </div>
    </section>
  );
};

export default HeroSection;
