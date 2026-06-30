import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
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
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-sans text-xs tracking-ultra-wide uppercase text-gold-light mb-4 fade-in-up"
            >
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream font-light leading-tight mb-6 fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-velvet-200 font-light leading-relaxed mb-10 fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who wears her story. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-champagne-400 transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-cream/50 text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:border-cream hover:bg-cream/10 transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-cream/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
