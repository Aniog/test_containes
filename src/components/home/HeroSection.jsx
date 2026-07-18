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
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-velmora-base">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold-light mb-6">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 text-sm md:text-base text-white/80 max-w-lg leading-relaxed"
        >
          Timeless pieces in 18K gold plate, designed for everyday luxury and moments that matter.
        </p>
        <Link
          to="/shop"
          className="mt-10 px-10 py-4 bg-velmora-gold text-white text-xs font-semibold tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest uppercase text-white/60">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
