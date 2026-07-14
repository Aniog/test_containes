import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-7x9k2m"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/30 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 text-base md:text-lg text-cream/80 font-light max-w-md"
          >
            Demi-fine gold jewelry for the modern woman. Timeless elegance, accessible luxury.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-cream px-8 py-3.5 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors no-underline rounded-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
