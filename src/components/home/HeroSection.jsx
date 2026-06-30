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
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4 animate-fade-in"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              New Collection · 2024
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-velmora-ivory leading-tight tracking-wide animate-fade-in"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              Crafted to be<br />
              <em className="italic text-velmora-gold-light">Treasured</em>
            </h1>
            <p
              id="hero-subtitle"
              className="font-sans text-sm md:text-base text-velmora-ivory/70 mt-5 leading-relaxed max-w-sm animate-fade-in"
              style={{ animationDelay: '0.6s', opacity: 0 }}
            >
              Demi-fine gold jewelry for the woman who knows her worth. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in"
              style={{ animationDelay: '0.8s', opacity: 0 }}
            >
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase font-medium px-8 py-4 hover:bg-velmora-gold-dark transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-velmora-ivory/40 text-velmora-ivory font-sans text-xs tracking-widest uppercase font-medium px-8 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.2s', opacity: 0 }}>
        <span className="font-sans text-[10px] tracking-widest uppercase text-velmora-ivory/40">Scroll</span>
        <div className="w-px h-8 bg-velmora-ivory/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-velmora-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
