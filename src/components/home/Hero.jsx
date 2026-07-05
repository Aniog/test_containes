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
        data-strk-bg-id="hero-bg-main-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/80 via-obsidian/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-medium animate-fade-in-up">
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-parchment font-light leading-[1.1] mb-6"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic text-gold">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="text-sm sm:text-base text-parchment/70 leading-relaxed mb-10 max-w-sm font-light"
              style={{ animationDelay: '0.2s' }}
            >
              18K gold plated jewelry designed for the modern woman. Wear it every day. Gift it with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-gold text-obsidian text-[10px] tracking-widest uppercase px-8 py-4 font-medium hover:bg-gold-light transition-all duration-300 shadow-gold"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center border border-parchment/40 text-parchment text-[10px] tracking-widest uppercase px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/60 animate-pulse" />
      </div>
    </section>
  );
}
