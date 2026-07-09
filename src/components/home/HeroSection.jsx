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
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-main-7f3a2b"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-5 animate-fadeIn"
            >
              New Collection · 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-warm-white leading-[1.1] tracking-wide mb-6 animate-fadeIn"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-warm-white/75 leading-relaxed mb-10 animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who values beauty in the everyday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-gold text-obsidian font-sans text-xs uppercase tracking-[0.15em] font-semibold px-8 py-4 hover:bg-gold-light transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center border border-warm-white/40 text-warm-white font-sans text-xs uppercase tracking-[0.15em] font-medium px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-warm-white/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-warm-white/40 to-transparent" />
      </div>
    </section>
  );
}
