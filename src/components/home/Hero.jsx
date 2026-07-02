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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-velmora-obsidian/50 via-velmora-obsidian/30 to-velmora-obsidian/60" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-6">
          New Collection — Summer 2026
        </p>
        <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl font-light leading-tight mb-6">
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p id="hero-subhead" className="font-sans text-base md:text-lg text-white/80 mb-10 max-w-md mx-auto leading-relaxed">
          Demi-fine gold jewelry for the woman who wears her story. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:bg-velmora-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] tracking-widest uppercase text-white/50">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
