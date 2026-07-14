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
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <p id="hero-eyebrow" className="text-xs font-sans tracking-ultra-wide uppercase text-gold mb-6 font-medium">
          New Collection — Summer 2026
        </p>
        <h1
          id="hero-headline"
          className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight mb-6"
          style={{ letterSpacing: '0.02em' }}
        >
          Crafted to be<br />
          <em className="italic font-light">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-base md:text-lg text-ivory/80 font-light mb-10 max-w-md mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry for the woman who wears her story with grace.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-obsidian text-xs tracking-widest uppercase font-sans font-semibold px-10 py-4 hover:bg-gold-light transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-ivory/0 to-ivory/40" />
      </div>
    </section>
  );
}
