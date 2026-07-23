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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-[#FAF9F7] px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-[#FAF9F7]/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm md:text-base font-light mb-10 text-[#FAF9F7]/90 max-w-lg mx-auto">
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="btn-accent">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FAF9F7]/60 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
