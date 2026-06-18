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
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden text-cream"
    >
      <div
        className="absolute inset-0 bg-ink"
        data-strk-bg-id="velmora-hero-bg-9c4e2a"
        data-strk-bg="[hero-headline] [hero-sub] warm gold jewelry close up on model neck and ear editorial soft light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Soft warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-2xl animate-rise">
          <p
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6"
            id="hero-eyebrow"
          >
            The Heritage Collection — New In
          </p>
          <h1
            id="hero-headline"
            className="font-serif font-light leading-[0.95] text-5xl md:text-7xl lg:text-8xl text-cream"
          >
            Crafted to be
            <br />
            <em className="not-italic text-champagne">Treasured</em>
          </h1>
          <p
            id="hero-sub"
            className="mt-6 md:mt-8 text-base md:text-lg text-cream/85 max-w-xl leading-relaxed"
          >
            Demi-fine gold jewelry, made in small runs and finished by hand.
            Pieces designed to live with you — and to outlast trends.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="inline-block bg-champagne text-cream hover:bg-champagne-deep px-8 py-4 text-xs tracking-[0.3em] uppercase transition-colors"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-block border border-cream/40 hover:border-cream hover:bg-cream/5 px-8 py-4 text-xs tracking-[0.3em] uppercase text-cream transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-3 text-cream/70">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <span className="block w-px h-10 bg-cream/40" />
        </div>
      </div>
    </section>
  );
}
