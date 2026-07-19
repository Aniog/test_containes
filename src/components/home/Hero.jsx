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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-x9y8z7"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1]"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 md:mt-6 text-base md:text-lg text-white/80 font-sans leading-relaxed max-w-md"
          >
            Demi-fine gold jewelry designed for the modern woman. Timeless elegance, accessible luxury.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-white px-10 py-4 text-sm uppercase tracking-[0.15em] font-sans font-medium hover:bg-gold-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
