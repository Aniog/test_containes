import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <div
        className="absolute inset-0 bg-charcoal-900"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="gold jewelry on model warm light close up editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/30 via-charcoal-950/20 to-charcoal-950/60" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
        <p
          id="hero-subtitle"
          className="text-cream-200/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-5"
        >
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream-50 max-w-3xl leading-[1.1]"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-5 text-cream-200/70 text-sm md:text-base max-w-md leading-relaxed">
          18K gold-plated pieces designed for everyday elegance and timeless moments.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block px-10 py-3.5 bg-cream-50 text-charcoal-900 text-xs tracking-[0.2em] uppercase hover:bg-gold-400 hover:text-cream-50 transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
