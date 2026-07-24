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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-fade-in-up">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-champagne mb-4">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-tight"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="mt-5 text-base md:text-lg text-ivory/80 font-sans font-light leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-champagne-light transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center border border-ivory/60 text-ivory font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-ivory hover:bg-ivory/10 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/50">
        <span className="text-[10px] tracking-widest uppercase font-sans">Scroll</span>
        <div className="w-px h-8 bg-ivory/30 animate-pulse" />
      </div>
    </section>
  );
}
