import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-charcoal"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-velmora-goldlight mb-4 md:mb-6">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-light leading-[1.1] tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-base text-white/80 font-light max-w-lg mx-auto leading-relaxed"
        >
          Timeless 18K gold-plated pieces designed for everyday elegance and lasting beauty.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-velmora-gold text-white px-8 md:px-10 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-velmora-charcoal transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
