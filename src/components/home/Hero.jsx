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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-obsidian"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest-xl font-sans text-velmora-gold mb-6 animate-fadeIn">
              18K Gold Plated · Demi-Fine Jewelry
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 animate-fadeIn"
              style={{ animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="text-base md:text-lg text-white/75 font-sans font-light leading-relaxed mb-10 animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth.
              Designed to be worn every day, gifted with love.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fadeIn"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                to="/shop"
                className="inline-block bg-velmora-gold text-velmora-obsidian text-xs uppercase tracking-widest font-semibold px-10 py-4 hover:bg-velmora-gold-dark transition-colors duration-200 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="inline-block border border-white/50 text-white text-xs uppercase tracking-widest font-semibold px-10 py-4 hover:border-white hover:bg-white/10 transition-all duration-200 text-center"
              >
                View Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <span className="text-[10px] uppercase tracking-widest text-white/40 font-sans">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
