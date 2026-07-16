import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-warm-gold"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/50 to-base z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
        <p className="text-xs sm:text-sm tracking-widest-2xl uppercase text-gold font-medium mb-4 sm:mb-6 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary font-light leading-tight mb-6 animate-slide-up"
        >
          Crafted to be<br />
          <span className="italic text-gold">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm sm:text-base text-text-primary/70 max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          Premium demi-fine jewelry, designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold hover:bg-gold-light text-base text-sm font-medium tracking-widest-xl uppercase px-10 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <span className="text-[10px] tracking-widest-2xl uppercase text-text-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
