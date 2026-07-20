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
        data-strk-bg-id="hero-bg-main-7f3a2c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian/70" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-6 font-medium">
          New Collection 2026
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-mist font-light leading-[1.05] mb-6"
        >
          Crafted to be<br />
          <em className="italic text-champagne">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-sm md:text-base text-mist/70 tracking-wide mb-10 max-w-md mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry for the woman who knows her worth.
          18K gold plated. Hypoallergenic. Made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-champagne text-velvet font-sans text-xs tracking-widest uppercase font-semibold hover:bg-gold transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-champagne/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
