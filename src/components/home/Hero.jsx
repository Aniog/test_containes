import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image via stock system */}
      <div
        className="absolute inset-0 bg-surface-2"
        data-strk-bg-id="hero-bg-warm-jewelry-a1b2c3"
        data-strk-bg="[hero-subtext] [hero-heading]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-base/90 via-base/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-base/30" />

      {/* Content */}
      <div className="relative section-padding w-full max-w-[1440px] mx-auto">
        <div className="max-w-xl">
          <p className="section-subtitle mb-4 animate-fade-up" id="hero-subtext">
            Velmora Fine Jewelry
          </p>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-6 animate-fade-up"
            style={{ animationDelay: '100ms' }}
            id="hero-heading"
          >
            Crafted to be<br />
            <span className="text-gradient-gold">Treasured</span>
          </h1>
          <p
            className="text-base md:text-lg text-cream-muted leading-relaxed mb-8 max-w-md animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            18K gold-plated demi-fine jewelry, designed for the woman who
            knows that luxury lives in the details.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <Link to="/collection" className="btn-gold">
              Shop the Collection
            </Link>
            <Link to="/collection" className="btn-gold-outline">
              View Bestsellers
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
