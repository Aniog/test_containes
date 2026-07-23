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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p
            id="hero-eyebrow"
            className="text-xs font-sans uppercase tracking-widest3 text-gold mb-6 fade-in-up"
          >
            New Collection 2024
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl font-light text-ivory leading-tight tracking-wide fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be
            <br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 text-sm md:text-base font-sans text-ivory/70 leading-relaxed max-w-sm fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated. Hypoallergenic.
          </p>
          <div className="mt-10 flex items-center gap-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="bg-gold text-obsidian hover:bg-gold-dark px-8 py-4 text-xs uppercase tracking-widest font-sans font-semibold transition-colors duration-300 inline-block"
            >
              Shop the Collection
            </Link>
            <a
              href="#about"
              className="text-xs uppercase tracking-widest font-sans font-medium text-ivory/70 hover:text-gold transition-colors border-b border-ivory/30 hover:border-gold pb-0.5"
            >
              Our Story
            </a>
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
