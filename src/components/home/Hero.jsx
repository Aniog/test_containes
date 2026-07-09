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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.65) 50%, rgba(26,26,26,0.2) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: '#FAF7F2' }}
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 text-base md:text-lg font-light leading-relaxed max-w-md"
            style={{ color: 'rgba(250,247,242,0.85)' }}
          >
            Demi-fine gold jewelry for the woman who values quiet elegance. Timeless pieces, ethically made.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 px-8 py-3.5 text-sm font-medium uppercase tracking-wider transition-colors duration-200"
            style={{ backgroundColor: '#B8860B', color: '#FAF7F2' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
