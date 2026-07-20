import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] sm:min-h-screen flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-charcoal-950/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 sm:py-40">
        <div className="max-w-xl">
          <p id="hero-subtitle" className="text-gold-400 text-xs tracking-mega-wide uppercase font-medium mb-4 animate-fade-in">
            Demi-Fine Jewelry
          </p>
          <h1 id="hero-title" className="heading-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-brand-50 font-light leading-[1.1] animate-fade-in">
            Crafted to be{' '}
            <span className="italic text-gold-300">Treasured</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-brand-200 text-sm sm:text-base leading-relaxed max-w-md animate-fade-in" style={{ animationDelay: '200ms' }}>
            18K gold-plated jewelry designed for the modern woman. Hypoallergenic,
            tarnish-resistant, and crafted to last — at prices that let you treat yourself.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold-600 text-white text-xs tracking-ultra-wide uppercase font-semibold rounded-sm hover:bg-gold-700 transition-colors duration-300"
            >
              Shop the Collection
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-300 text-brand-100 text-xs tracking-ultra-wide uppercase font-semibold rounded-sm hover:bg-brand-50/10 transition-colors duration-300"
            >
              View Bestsellers
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '600ms' }}>
        <span className="text-brand-300 text-[10px] tracking-ultra-wide uppercase">Scroll</span>
        <div className="w-px h-8 bg-brand-400/50" />
      </div>
    </section>
  );
}
