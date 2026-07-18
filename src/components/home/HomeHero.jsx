import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-espresso/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container-max section-padding">
        <div className="max-w-2xl">
          <p id="hero-subtitle" className="text-warmwhite/80 font-sans text-xs tracking-widest uppercase mb-4">
            Demi-Fine Jewelry · Est. 2025
          </p>
          <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-warmwhite leading-tight mb-6 text-balance">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-warmwhite/70 text-base md:text-lg font-light max-w-lg mb-8 leading-relaxed">
            18K gold-plated demi-fine jewelry for the woman who knows that quiet luxury speaks the loudest.
          </p>
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warmwhite/50">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-warmwhite/30 animate-pulse" />
      </div>
    </section>
  );
}
