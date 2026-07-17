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
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/80 via-obsidian/50 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p
            id="hero-eyebrow"
            className="font-sans text-xs uppercase tracking-widest text-gold mb-6"
          >
            New Collection · 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-sm md:text-base text-ivory/70 mt-6 leading-relaxed max-w-sm"
          >
            Demi-fine gold jewelry for the woman who moves through the world with quiet confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/shop"
              className="inline-block bg-gold text-obsidian font-sans text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors duration-300 font-semibold text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#story"
              className="inline-block border border-ivory/40 text-ivory font-sans text-xs uppercase tracking-widest px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300 text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-ivory/0 to-ivory/40 animate-pulse" />
      </div>
    </section>
  );
}
