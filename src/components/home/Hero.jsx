import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden -mt-16 md:-mt-20">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-jewelry-01"
        data-strk-bg="[hero-heading] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-muted"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24 px-4 md:px-8">
        <div className="max-w-content mx-auto">
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-light leading-tight max-w-2xl"
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-white/80 text-sm md:text-base mt-4 max-w-md font-light leading-relaxed"
          >
            Demi-fine gold jewelry designed for everyday elegance. Each piece is a quiet celebration of beauty and craftsmanship.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}