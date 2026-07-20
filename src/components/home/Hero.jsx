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
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-q8r9s0"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-cream/80 mt-4 md:mt-6 max-w-md mx-auto"
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless pieces at an accessible luxury price point.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 px-10 py-4 bg-gold text-cream font-sans text-xs uppercase tracking-wider font-medium hover:bg-gold-dark transition-all duration-300 no-underline"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
