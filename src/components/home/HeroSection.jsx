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
        data-strk-bg-id="hero-bg-a8f2c1"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 text-white/80 fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm sm:text-base text-white/70 mb-8 max-w-md mx-auto fade-in" style={{ animationDelay: '0.4s' }}>
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, made to last.
        </p>
        <div className="fade-in" style={{ animationDelay: '0.6s' }}>
          <Link to="/shop" className="btn-accent inline-flex">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
