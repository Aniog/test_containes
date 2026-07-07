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
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p
            id="hero-eyebrow"
            className="font-sans text-[10px] uppercase tracking-[0.25em] text-champagne mb-6 animate-fade-in"
          >
            New Collection · 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1.05] mb-6 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be<br />
            <em className="not-italic text-champagne-light">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-sm md:text-base text-ivory/70 leading-relaxed mb-10 max-w-sm animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Demi-fine gold jewelry for the woman who wears her story. 18K gold plated, hypoallergenic, made to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="inline-block bg-champagne text-obsidian font-sans text-xs uppercase tracking-[0.15em] font-semibold px-10 py-4 hover:bg-champagne-dark transition-colors duration-300 text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#about"
              className="inline-block border border-ivory/40 text-ivory font-sans text-xs uppercase tracking-[0.15em] font-medium px-10 py-4 hover:border-champagne hover:text-champagne transition-colors duration-300 text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-ivory/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
