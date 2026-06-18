import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-9a3f2c"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto"
        >
          Demi-fine gold jewelry for the woman who values quiet elegance. Timeless pieces, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3.5 bg-gold text-white font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
