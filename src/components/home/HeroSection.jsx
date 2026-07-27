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
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 id="hero-title" className="velmora-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-white/80 text-base sm:text-lg md:text-xl font-light mb-10 max-w-xl mx-auto">
          Demi-fine gold jewelry for the modern woman. Timeless pieces, thoughtfully designed.
        </p>
        <Link to="/shop" className="velmora-btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
