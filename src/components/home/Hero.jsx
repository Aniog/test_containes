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
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay — strong dark veil on left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold mb-6">
            New Collection — 2024
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl font-light leading-[1.05] mb-6"
            style={{ color: '#FFFDF9' }}
          >
            Crafted to be<br />
            <em className="not-italic text-gold-light">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-sm md:text-base leading-relaxed mb-10 max-w-sm"
            style={{ color: 'rgba(255,253,249,0.70)' }}
          >
            Demi-fine gold jewelry for the woman who moves through the world with intention. Wear it every day.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-ivory font-sans text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-10 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
