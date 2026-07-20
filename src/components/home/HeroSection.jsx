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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-charcoal"
        data-strk-bg-id="hero-bg-main-f1a2b3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/30 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-6 animate-fade-in">
              18K Gold Plated · Demi-Fine Jewelry
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-velmora-ivory leading-none mb-6 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic text-velmora-gold-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm md:text-base text-velmora-ivory/80 mb-10 leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth.
              Hypoallergenic, ethically made, and designed to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:bg-velmora-gold-light transition-all duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="inline-block border border-velmora-ivory/50 text-velmora-ivory font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300 text-center"
              >
                View Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <span className="font-manrope text-[10px] uppercase tracking-widest text-velmora-ivory/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-ivory/50 to-transparent" />
      </div>
    </section>
  );
}
