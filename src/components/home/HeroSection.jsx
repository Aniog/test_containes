import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-background-main"
        data-strk-bg="[hero-subtext] [hero-title] warm gold jewelry luxury editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/50" />

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-2xl mx-auto animate-fade-in">
        <h1
          id="hero-title"
          className="font-serif text-display md:text-[5rem] text-cream-50 mb-4 leading-[1.05]"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtext"
          className="font-sans text-sub md:text-lg text-cream-200/90 mb-8 max-w-lg mx-auto"
        >
          Premium demi-fine jewelry, designed for the moments that matter. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-gold hover:bg-gold-light text-charcoal font-sans text-caption uppercase tracking-ultra-wide transition-all duration-300 rounded shadow-sm hover:shadow-md"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="w-[1px] h-8 bg-cream-100/30 animate-pulse" />
      </div>
    </section>
  );
}
