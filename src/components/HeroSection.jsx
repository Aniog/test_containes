import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-velmora-ink/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm tracking-widest-xl uppercase text-white/80 mb-4 md:mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-6 md:mb-8 max-w-4xl animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          className="font-sans text-sm md:text-base text-white/70 max-w-md mb-8 md:mb-10 animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          18K gold-plated pieces designed for the modern woman. Timeless elegance, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-10 bg-white/40 mx-auto" />
      </div>
    </section>
  );
}