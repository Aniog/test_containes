import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-d873f2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="max-w-xl animate-fade-in">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-medium">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="serif-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream-100 leading-[1.08] mb-6"
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream-300/70 text-base md:text-lg leading-relaxed mb-10 max-w-md"
          >
            Heirloom-quality demi-fine jewelry for the modern woman.
            18K gold-plated pieces designed to be worn, loved, and passed down.
          </p>
          <Link to="/shop" className="btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-cream-300/20 mx-auto animate-pulse" />
        <p className="text-[10px] tracking-[0.2em] uppercase text-cream-300/30 mt-3">Scroll</p>
      </div>
    </section>
  );
}
