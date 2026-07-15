import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-home"
        data-strk-bg="[hero-heading] [hero-subheading]"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-ink"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 id="hero-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-wide">
              Crafted to be<br />Treasured
            </h1>
            <p id="hero-subheading" className="mt-4 text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-md">
              Demi-fine gold jewelry, thoughtfully designed for the woman who values quality, warmth, and quiet elegance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop/earrings"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-white text-[11px] uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/collections"
                className="inline-flex items-center justify-center border border-white/40 text-white text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-white/10 transition-all duration-300"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}