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
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-inter text-[10px] uppercase tracking-[0.22em] text-gold mb-5 animate-fadeIn"
            >
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-ivory leading-[1.05] tracking-wide mb-5 animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm text-ivory/70 leading-relaxed mb-8 max-w-sm animate-fadeInUp"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who wears her story. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="flex items-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-flex items-center bg-gold text-obsidian font-inter text-[11px] uppercase tracking-[0.16em] px-8 py-3.5 hover:bg-gold-light transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="font-inter text-[11px] uppercase tracking-[0.14em] text-ivory/70 hover:text-ivory transition-colors duration-300 border-b border-ivory/30 pb-0.5"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-ivory/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
