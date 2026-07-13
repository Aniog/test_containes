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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-xs tracking-ultra-wide uppercase font-sans font-medium text-gold mb-6"
        >
          New Collection
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl text-cream font-light leading-tight mb-6"
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-sm md:text-base text-cream/80 font-light tracking-wide mb-10 max-w-md mx-auto"
        >
          Demi-fine gold jewelry for the woman who moves through the world with intention.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-cream px-10 py-4 text-xs tracking-widest uppercase font-sans font-semibold hover:bg-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
}
