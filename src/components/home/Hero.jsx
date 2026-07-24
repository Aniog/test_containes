import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
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
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
              New Collection — 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream font-300 leading-[1.1] mb-5"
            >
              Crafted to be<br />
              <em className="not-italic text-gold-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm md:text-base text-cream/70 leading-relaxed mb-8 max-w-sm"
            >
              Demi-fine gold jewelry for the everyday and the extraordinary. Designed to be worn, loved, and passed on.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-cream/0 to-cream/40" />
      </div>
    </section>
  );
};

export default Hero;
