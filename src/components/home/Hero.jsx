import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current);
    }
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-near-black/70 via-brand-near-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl animate-fade-in">
          <p className="text-brand-gold-light text-sm font-medium uppercase tracking-[0.25em] mb-4">
            New Collection 2026
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6"
          >
            Crafted to be
            <br />
            <span className="font-medium italic">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            Premium demi-fine jewelry designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop">
              <Button size="lg">Shop the Collection</Button>
            </Link>
            <Link to="/shop">
              <Button variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white hover:text-brand-charcoal">
                View Bestsellers
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs uppercase tracking-widest-plus">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
