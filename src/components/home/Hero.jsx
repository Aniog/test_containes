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
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p
          id="hero-eyebrow"
          className="font-inter text-xs tracking-widest uppercase text-gold mb-6 animate-fadeIn"
        >
          New Collection · 2024
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6 animate-fadeIn"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-inter text-sm md:text-base text-cream/80 max-w-md leading-relaxed mb-10 animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the woman who moves through the world with intention.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fadeIn"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            to="/shop"
            className="bg-gold text-obsidian font-inter text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            Shop the Collection
          </Link>
          <Link
            to="/#about"
            className="border border-cream/50 text-cream font-inter text-xs tracking-widest uppercase px-10 py-4 hover:border-gold hover:text-gold transition-colors duration-200"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <span className="font-inter text-[10px] tracking-widest uppercase text-cream/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
