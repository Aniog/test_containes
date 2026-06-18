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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-obsidian">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-4">
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-manrope text-sm text-ivory/80 mt-5 leading-relaxed max-w-sm"
          >
            Demi-fine gold jewelry for the woman who moves through the world with intention. Hypoallergenic. Tarnish-resistant. Made to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              to="/shop"
              className="inline-block bg-gold text-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors duration-300 text-center"
            >
              Shop the Collection
            </Link>
            <a
              href="#story"
              className="inline-block border border-ivory/50 text-ivory font-manrope text-xs uppercase tracking-widest px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-300 text-center"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
