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
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-headline] gold jewelry woman elegant minimal"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center top' }}
      />

      {/* Warm overlay — stronger for readability */}
      <div className="absolute inset-0 z-10 bg-obsidian/65" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="font-inter text-xs uppercase tracking-widest text-gold-light mb-6 animate-fadeIn">
          New Collection — Summer 2026
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight tracking-wide max-w-3xl animate-fadeIn"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-inter text-sm text-cream/80 mt-6 max-w-sm leading-relaxed animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the woman who knows her worth.
          Designed to be worn every day, remembered forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="bg-gold text-obsidian font-inter text-xs uppercase tracking-widest px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
          <Link
            to="/#story"
            className="border border-cream/60 text-cream font-inter text-xs uppercase tracking-widest px-10 py-4 hover:bg-cream/10 transition-colors duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <span className="font-inter text-[10px] uppercase tracking-widest text-cream/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
