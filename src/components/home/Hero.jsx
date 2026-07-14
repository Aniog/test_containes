import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9f2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold-light mb-4 md:mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory font-light leading-[0.95] mb-4 md:mb-6"
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-ivory/80 max-w-md mb-8 md:mb-10 leading-relaxed"
        >
          18K gold-plated jewelry designed for the modern woman.
          <br className="hidden md:block" />
          Hypoallergenic. Tarnish-resistant. Made to last.
        </p>
        <Link to="/shop">
          <Button variant="primary" size="lg" className="rounded">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-ivory/30 relative overflow-hidden">
          <div className="w-full h-1/2 bg-ivory animate-bounce" />
        </div>
      </div>
    </section>
  );
}
