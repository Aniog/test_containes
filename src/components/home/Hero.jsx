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
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-6 fade-in-up">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl lg:text-7xl font-light text-white leading-[1.1] tracking-wide fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base text-white/75 mt-6 leading-relaxed fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth.
              Designed to be worn every day, remembered forever.
            </p>
            <div className="flex items-center gap-4 mt-10 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block bg-gold text-white font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold-light transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-block font-sans text-xs uppercase tracking-[0.15em] text-white/80 hover:text-gold transition-colors duration-300 border-b border-white/30 pb-0.5"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
