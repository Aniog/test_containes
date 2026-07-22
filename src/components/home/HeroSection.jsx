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
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-slide-up">
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6 leading-tight"
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base tracking-widest uppercase text-white/80 mb-10"
        >
          Demi-fine gold jewelry for everyday luxury
        </p>
        <Link to="/shop" className="inline-block bg-velmora-gold text-white px-10 py-4 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300 hover:bg-velmora-gold-dark">
          Shop the Collection
        </Link>
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
