import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry editorial close-up model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="max-w-xl">
          <div className="hairline mb-6" />
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
            New Collection
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-5 tracking-[0.02em]"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream/70 text-base sm:text-lg leading-relaxed mb-8 max-w-md"
          >
            Demi-fine 18K gold-plated jewelry designed for the modern woman. Effortless elegance, everyday.
          </p>
          <Link
            to="/shop"
            className="btn-accent inline-flex items-center gap-2 group"
          >
            Shop the Collection
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
