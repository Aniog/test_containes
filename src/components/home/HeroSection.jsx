import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-espresso/30"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p
          id="hero-subtitle"
          className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/90 mb-5"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light max-w-4xl leading-[1.05] mb-8"
        >
          Crafted to be Treasured
        </h1>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-accent text-white text-xs uppercase tracking-label font-medium hover:bg-accent-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
