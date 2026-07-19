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
        data-strk-bg-id="hero-bg-main-f1e2d3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          <div className="max-w-xl">
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold-pale mb-4 md:mb-6">
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1.1] tracking-wide mb-4 md:mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm md:text-base text-ivory/80 mb-8 md:mb-10 leading-relaxed max-w-sm"
            >
              18K gold-plated jewelry designed for the woman who values beauty in the everyday.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory font-inter text-xs uppercase tracking-[0.15em] px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-10 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
