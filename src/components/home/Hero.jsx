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
        data-strk-bg-id="hero-bg-main-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl fade-in-up">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4 font-medium">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-white/75 mb-10 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block px-10 py-4 bg-gold text-obsidian font-sans text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-block px-10 py-4 border border-white/40 text-white font-sans text-xs tracking-widest uppercase font-medium hover:border-gold hover:text-gold transition-colors duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[10px] tracking-widest uppercase text-white">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
