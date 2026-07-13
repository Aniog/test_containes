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
        className="absolute inset-0 bg-velmora-obsidian"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p
              id="hero-eyebrow"
              className="text-xs font-medium tracking-widest-xl uppercase text-velmora-gold mb-5"
            >
              New Collection · 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-velmora-linen leading-tight tracking-wide"
            >
              Crafted to be<br />
              <em className="italic text-velmora-gold-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="mt-6 text-base md:text-lg text-velmora-sand leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who wears her story. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian text-xs font-semibold tracking-widest uppercase px-10 py-4 hover:bg-velmora-gold-light transition-colors duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-block border border-velmora-sand text-velmora-sand text-xs font-medium tracking-widest uppercase px-10 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] tracking-widest uppercase text-velmora-sand">Scroll</span>
        <div className="w-px h-8 bg-velmora-sand animate-pulse" />
      </div>
    </section>
  );
}
