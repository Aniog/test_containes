import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-white/80 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="serif-heading text-4xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm md:text-base text-white/70 mb-8 max-w-md mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Everyday luxury in 18K gold plated pieces. Designed for the modern woman who values quality without compromise.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
}
