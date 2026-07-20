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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-7f3a2b"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-velmora-obsidian/50 via-velmora-obsidian/30 to-velmora-obsidian/60" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <p
          id="hero-eyebrow"
          className="font-inter text-xs font-medium uppercase tracking-widest-xl text-velmora-gold-light mb-6"
        >
          New Collection — Summer 2026
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant font-light text-5xl md:text-7xl lg:text-8xl text-velmora-white leading-none tracking-tight mb-6 max-w-4xl"
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-inter font-light text-sm md:text-base text-velmora-white/80 mb-10 max-w-md leading-relaxed"
        >
          Demi-fine gold jewelry for the woman who knows her worth.
          Designed to be worn every day, remembered forever.
        </p>
        <Link
          to="/shop"
          className="inline-block font-inter text-xs font-medium uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-10 py-4 hover:bg-velmora-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-velmora-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
