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
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-5">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-ivory leading-[1.1] mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base lg:text-lg text-ivory/75 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows what she loves. Hypoallergenic. Endlessly wearable.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-gold text-obsidian font-sans text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[10px] uppercase tracking-widest text-ivory">Scroll</span>
        <div className="w-px h-8 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  );
}
