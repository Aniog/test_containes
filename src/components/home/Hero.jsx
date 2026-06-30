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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p className="text-xs font-sans tracking-widest uppercase text-gold mb-4 font-medium">
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-parchment font-light leading-tight"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="mt-5 text-base md:text-lg font-sans text-parchment/80 leading-relaxed max-w-sm"
          >
            Demi-fine gold jewelry for the woman who wears her story. Hypoallergenic, 18K gold plated.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              to="/shop"
              className="inline-block bg-gold text-obsidian text-xs tracking-wider uppercase font-sans font-semibold px-8 py-4 hover:bg-gold-light transition-colors duration-200 text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#about"
              className="inline-block border border-parchment/60 text-parchment text-xs tracking-wider uppercase font-sans font-medium px-8 py-4 hover:border-parchment hover:bg-parchment/10 transition-colors duration-200 text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-parchment/40 animate-pulse" />
        <span className="text-[10px] font-sans tracking-widest uppercase text-parchment/50">Scroll</span>
      </div>
    </section>
  );
}
