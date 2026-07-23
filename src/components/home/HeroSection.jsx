import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-velvet">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-velvet/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-medium leading-[1.1] max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 md:mt-6 text-cream/80 text-sm md:text-base max-w-lg leading-relaxed font-light"
        >
          Demi-fine jewelry designed for the modern woman — timeless pieces that
          transition effortlessly from day to night.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block px-8 py-3.5 bg-gold text-velvet text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
}
