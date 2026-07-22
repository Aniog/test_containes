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
        data-strk-bg-id="hero-bg-main-f1e2d3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-6 opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-parchment leading-[1.1] mb-6 opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.4s' }}
            >
              Crafted to be<br />
              <em className="italic text-gold-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm md:text-base text-parchment/70 leading-relaxed mb-10 max-w-sm opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.6s' }}
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated. Hypoallergenic. Made to last.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.8s' }}
            >
              <Link
                to="/shop"
                className="inline-block bg-gold text-obsidian font-sans text-xs uppercase tracking-[0.15em] font-semibold px-10 py-4 hover:bg-gold-light transition-all duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-block border border-parchment/40 text-parchment font-sans text-xs uppercase tracking-[0.15em] px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-parchment">Scroll</span>
        <div className="w-px h-8 bg-parchment/40 animate-pulse" />
      </div>
    </section>
  );
}
