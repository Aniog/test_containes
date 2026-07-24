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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-brand-ink/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1 id="hero-title" className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wider leading-tight text-balance">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 text-white/70 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto leading-relaxed">
          Demi-fine gold jewelry designed for the moments that matter. 18K gold-plated, ethically crafted, made to layer and love every day.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 bg-white text-brand-ink px-10 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-brand-gold hover:text-white transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
