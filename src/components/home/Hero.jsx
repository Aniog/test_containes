import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-7f3c"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry luxury editorial warm"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-velvet-950/70 via-velvet-950/40 to-transparent" />

      {/* Content */}
      <div className="relative z-[2] velmora-container w-full">
        <div className="max-w-xl py-32 md:py-0">
          <p className="velmora-overline mb-4 text-gold-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            New Collection 2026
          </p>
          <h1
            id="hero-title"
            className="font-serif text-display text-cream mb-6 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="font-sans text-lg text-velvet-200 mb-8 leading-relaxed animate-fade-in max-w-md"
            style={{ animationDelay: '0.6s' }}
          >
            Premium demi-fine jewelry designed for the modern woman. 18K gold plated, hypoallergenic, made to last.
          </p>
          <a
            href="/shop"
            className="velmora-btn-primary inline-block animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            Shop the Collection
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="text-xs font-sans tracking-widest uppercase text-velvet-300">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-velvet-300 to-transparent" />
      </div>
    </section>
  );
}
