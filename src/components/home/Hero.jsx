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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title] luxury gold jewelry on model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />

      {/* Content */}
      <div className="container-page relative z-10 pt-20">
        <div className="max-w-xl">
          <p className="text-gold-light text-xs uppercase tracking-[0.3em] mb-4 font-sans font-medium">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-stone-300 text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            Premium 18K gold-plated jewelry, designed for the modern woman. 
            Elegant pieces that transition effortlessly from everyday to extraordinary.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  );
}
