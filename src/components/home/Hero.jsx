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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-sans text-xs tracking-widest uppercase text-gold mb-6 animate-fadeIn"
            >
              New Collection · 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-tight tracking-wide animate-fadeIn"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be
              <br />
              <em className="italic font-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm md:text-base text-ivory/80 mt-6 leading-relaxed max-w-sm animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who wears her story. 18K gold plated, hypoallergenic, made to last.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mt-10 animate-fadeIn"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                to="/shop"
                className="inline-block bg-gold text-ivory px-10 py-4 font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-ivory/60 text-ivory px-10 py-4 font-sans text-xs tracking-widest uppercase font-medium hover:border-gold hover:text-gold transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <span className="font-sans text-[10px] tracking-widest uppercase text-ivory/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/50 to-transparent" />
      </div>
    </section>
  );
}
