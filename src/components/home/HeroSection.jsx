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
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-velmora-obsidian/75 via-velmora-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-6">
              New Collection 2024
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-velmora-cream font-light leading-[1.1] mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subtitle"
              className="font-sans text-base md:text-lg text-velmora-cream/80 mb-10 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. 18K gold plated, hypoallergenic, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-10 py-4 bg-velmora-gold text-velmora-obsidian font-sans text-xs uppercase tracking-widest font-semibold hover:bg-velmora-gold-light transition-colors"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-10 py-4 border border-velmora-cream/50 text-velmora-cream font-sans text-xs uppercase tracking-widest font-semibold hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              >
                Explore Gifts
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-sans text-[10px] uppercase tracking-widest text-velmora-cream/50">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-velmora-cream/50 to-transparent" />
      </div>
    </section>
  );
}
