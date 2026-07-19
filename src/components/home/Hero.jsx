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
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-5 animate-fadeIn"
            >
              New Collection — 2024
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-ivory leading-[1.05] tracking-wide mb-6 animate-fadeIn"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm text-ivory/80 leading-relaxed mb-10 max-w-sm animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. Hypoallergenic. 18K gold plated. Made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block bg-gold text-obsidian font-manrope text-xs uppercase tracking-[0.15em] px-10 py-4 hover:bg-gold-light transition-colors text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-ivory/50 text-ivory font-manrope text-xs uppercase tracking-[0.15em] px-10 py-4 hover:bg-ivory/10 transition-colors text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <span className="font-manrope text-[10px] uppercase tracking-[0.2em] text-ivory/50">Scroll</span>
        <div className="w-px h-8 bg-ivory/30" />
      </div>
    </section>
  );
}
