import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-j3k4l5"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          id="hero-title"
          className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-white/80 font-sans text-sm md:text-base max-w-lg leading-relaxed"
        >
          Demi-fine gold jewelry designed for everyday elegance. Each piece tells a story of craftsmanship and intention.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-sans text-xs uppercase tracking-wide px-10 py-3.5 transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
