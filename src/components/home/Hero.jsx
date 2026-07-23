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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-vm01a2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 text-sm md:text-base text-cream/80 font-sans font-light max-w-md mx-auto"
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless elegance, everyday luxury.
        </p>
        <Link
          to="/collection"
          className="inline-block mt-8 bg-gold text-cream px-10 py-3.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
