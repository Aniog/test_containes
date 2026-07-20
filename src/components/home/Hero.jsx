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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-dark"
        data-strk-bg-id="hero-bg-velmora-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-light"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 md:mt-6 text-white/80 text-base md:text-lg font-light leading-relaxed"
          >
            Demi-fine gold jewelry designed for the modern woman. Timeless pieces that elevate every moment.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 px-8 py-3.5 bg-gold text-white text-sm tracking-wider uppercase font-medium hover:bg-gold-light transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
