import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="warm gold jewelry on dark luxury background editorial lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velvet/80 via-velvet/50 to-velvet/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <p
            id="hero-subtitle"
            className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-light mb-4 animate-fade-in"
          >
            18K Gold Plated · Hypoallergenic
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-champagne leading-[1.1] mb-6 animate-slide-up"
          >
            Crafted to be
            <br />
            <span className="italic text-gold-light">Treasured</span>
          </h1>
          <p className="text-sm sm:text-base text-champagne/70 font-sans font-light leading-relaxed mb-8 max-w-md animate-slide-up" style={{ animationDelay: '200ms' }}>
            Demi-fine jewelry designed for the modern woman. Thoughtfully crafted pieces that transition effortlessly from day to evening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold hover:bg-gold-light text-velvet text-xs tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-champagne/30 hover:border-champagne text-champagne text-xs tracking-[0.2em] uppercase font-sans font-light transition-all duration-300 hover:bg-champagne/5"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-[10px] tracking-[0.2em] uppercase text-champagne/40 font-sans">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-champagne/40 to-transparent" />
      </div>
    </section>
  );
}
