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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-9f3a2b"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-base md:text-lg text-white/80 font-sans font-light max-w-xl mx-auto"
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless pieces that elevate every moment.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold text-cream px-10 py-4 text-xs uppercase tracking-ultra-wide font-sans font-medium hover:bg-gold-light transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
