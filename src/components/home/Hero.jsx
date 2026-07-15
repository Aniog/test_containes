import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="luxury gold jewelry on model closeup warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto section-padding flex items-center">
        <div className="max-w-xl">
          <p className="text-caption uppercase tracking-[0.25em] text-gold-400 mb-4 font-sans animate-fade-in">
            Premium Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-display text-cream-100 mb-6 animate-slide-up">
            Crafted to be<br />
            <em className="italic font-light">Treasured</em>
          </h1>
          <p className="text-body-lg text-cream-300 mb-8 max-w-md leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover jewelry that tells your story. 18K gold-plated, hypoallergenic, 
            and designed for the moments that matter.
          </p>
          <Link
            to="/shop"
            className="btn-gold animate-slide-up inline-block no-underline"
            style={{ animationDelay: '0.4s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-caption uppercase tracking-[0.15em] text-cream-400/60 font-sans">Scroll</span>
        <div className="w-px h-8 bg-cream-400/40 animate-pulse" />
      </div>
    </section>
  );
}
