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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9f3a2b"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-gold mb-6">
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-warmwhite leading-[1.05] tracking-wide"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm text-warmwhite/80 mt-6 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. Designed to last, made to be worn every day.
            </p>
            <div className="flex items-center gap-4 mt-10">
              <Link
                to="/shop"
                className="inline-block bg-gold text-warmwhite font-inter text-[11px] uppercase tracking-[0.16em] px-8 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-warmwhite/50 text-warmwhite font-inter text-[11px] uppercase tracking-[0.16em] px-8 py-4 hover:border-warmwhite transition-colors duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-warmwhite/50 animate-pulse" />
        <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-warmwhite/60">Scroll</span>
      </div>
    </section>
  );
}
