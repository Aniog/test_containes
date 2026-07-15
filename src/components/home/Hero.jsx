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
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-f1e2d3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-inter text-[10px] uppercase tracking-[0.22em] text-gold mb-5">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-ivory leading-[1.05] tracking-wide mb-6"
            >
              Crafted to be<br />
              <em className="not-italic text-gold-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm text-ivory/75 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. Designed to last, made to be worn every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block bg-gold text-espresso font-inter text-[11px] uppercase tracking-[0.18em] px-10 py-4 hover:bg-gold-light transition-colors text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-ivory/50 text-ivory font-inter text-[11px] uppercase tracking-[0.18em] px-10 py-4 hover:border-ivory hover:bg-ivory/10 transition-colors text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-ivory">Scroll</span>
        <div className="w-px h-8 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
