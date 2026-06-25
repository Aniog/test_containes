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
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-charcoal/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold-light mb-6">
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-cormorant text-5xl md:text-7xl font-light text-ivory leading-[1.05] tracking-wide"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-inter text-sm text-ivory/70 mt-6 leading-relaxed max-w-sm"
          >
            Demi-fine gold jewelry for the woman who moves through the world with intention. Worn daily, gifted with love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory font-inter text-[10px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-light transition-colors text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#story"
              className="inline-block border border-ivory/40 text-ivory font-inter text-[10px] uppercase tracking-[0.2em] px-10 py-4 hover:border-ivory hover:bg-ivory/10 transition-colors text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-10 bg-ivory/30 animate-pulse" />
        <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-ivory/40">Scroll</span>
      </div>
    </section>
  );
}
