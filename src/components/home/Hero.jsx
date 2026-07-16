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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <p
            id="hero-eyebrow"
            className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-5 animate-fade-in"
          >
            New Collection · 2024
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-cream leading-[1.05] mb-6 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be<br />
            <em className="italic font-light">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-base text-cream/75 leading-relaxed mb-10 max-w-sm animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Demi-fine gold jewelry for the woman who moves through the world with intention. Wear it every day. Keep it forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-obsidian font-sans text-xs font-semibold tracking-widest uppercase hover:bg-gold-warm transition-colors"
            >
              Shop the Collection
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream/40 text-cream font-sans text-xs font-semibold tracking-widest uppercase hover:border-cream hover:bg-white/5 transition-colors"
            >
              Explore Gifts
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="font-sans text-[10px] tracking-widest uppercase text-cream/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
