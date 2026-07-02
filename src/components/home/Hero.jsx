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
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-sans text-[10px] tracking-widest3 uppercase text-gold mb-6"
            >
              New Collection — Summer 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-warm-white font-light leading-[1.05] mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-sm text-warm-white/75 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows exactly what she wants. Hypoallergenic, 18K gold plated, made to last.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-espresso font-sans text-[11px] tracking-widest uppercase font-medium px-10 py-4 hover:bg-gold-light transition-colors duration-250"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[9px] tracking-widest uppercase text-warm-white">Scroll</span>
        <div className="w-px h-8 bg-warm-white/40 animate-pulse" />
      </div>
    </section>
  );
}
