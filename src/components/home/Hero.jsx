import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-f1e2d3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <p
            id="hero-eyebrow"
            className="text-xs uppercase tracking-widest font-medium text-gold mb-4 animate-fadeIn"
          >
            New Collection · 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6 animate-fadeIn"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="text-base md:text-lg font-sans text-cream/80 mb-10 leading-relaxed animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            Demi-fine gold jewelry for the woman who knows her worth.
            18K gold plated, hypoallergenic, made to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="inline-block bg-gold text-cream px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#about"
              className="inline-block border border-cream/60 text-cream px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-cream/10 transition-colors text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <span className="text-[10px] uppercase tracking-widest text-cream/50 font-sans">Scroll</span>
        <div className="w-px h-8 bg-cream/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-[shimmer_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}
