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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-ink/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-warm-white/80 text-xs tracking-[0.3em] uppercase mb-4 font-light">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-warm-white leading-[1.1] max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-warm-white/80 text-sm md:text-base mt-5 max-w-lg font-light leading-relaxed"
        >
          Timeless 18K gold-plated pieces designed for the modern woman. 
          Elegant, accessible, made to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-gold text-ink px-10 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-hover transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-10 bg-warm-white/40 mx-auto animate-pulse" />
      </div>
    </section>
  );
}
