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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-gold mb-6">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-parchment leading-[1.05] mb-6"
            >
              Crafted to be<br />
              <em className="not-italic font-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm md:text-base font-light text-parchment/80 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. Worn every day, treasured forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-gold text-obsidian font-sans text-[11px] font-medium uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-flex items-center justify-center border border-parchment/60 text-parchment font-sans text-[11px] font-medium uppercase tracking-widest px-8 py-4 hover:bg-parchment/10 transition-colors duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-parchment/50 animate-pulse" />
      </div>
    </section>
  );
}
