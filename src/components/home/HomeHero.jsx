import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bronze-950/60 via-bronze-950/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-[0.05em] leading-tight mb-4 animate-fade-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-base text-bronze-200 tracking-[0.2em] uppercase max-w-md mb-10 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the modern woman
        </p>
        <Link
          to="/shop"
          className="btn-accent animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bronze-300 animate-fade-in">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-bronze-400/50" />
        </div>
      </div>
    </section>
  );
}
