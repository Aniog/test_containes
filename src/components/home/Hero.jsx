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
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian/70" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs uppercase tracking-widest text-champagne mb-6 font-medium">
          New Collection — Summer 2026
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-tight mb-6"
        >
          Crafted to be<br />
          <em className="italic text-champagne-light">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-sm md:text-base text-ivory/80 mb-10 max-w-md mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry for the woman who moves through the world with quiet confidence.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-champagne text-obsidian font-sans text-xs uppercase tracking-widest font-semibold px-10 py-4 hover:bg-champagne-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-champagne/50 animate-pulse" />
      </div>
    </section>
  );
}
