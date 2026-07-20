import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useReveal } from '@/hooks/useReveal';

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useReveal();

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso text-bone"
    >
      {/* Hero background image */}
      <div
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="editorial close-up portrait woman wearing gold jewelry, soft window light, warm cream background, premium campaign"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden="true"
      />
      {/* Subtle warm gradient overlay to keep type readable without darkening the photo too much */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-espresso/30 via-transparent to-espresso/55"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 md:pb-24 lg:px-12 lg:pb-28">
        <div ref={headlineRef} className="max-w-3xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-bone/80 sm:text-[11px]">
            Velmora · New Season
          </p>
          <h1 className="mt-5 font-serif text-5xl font-light leading-[1.02] tracking-tight text-bone sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Crafted to be <em className="font-serif italic text-gold-soft">treasured</em>.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-bone/85 sm:text-base">
            Demi-fine jewelry, hand-finished in 18K gold plate. Quietly
            considered, made to be worn — and kept — for years.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-bone px-8 py-4 text-[10px] font-medium uppercase tracking-[0.24em] text-espresso transition-colors duration-300 hover:bg-gold-soft"
            >
              Shop the Collection
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to="/collections/sets"
              className="text-[10px] font-medium uppercase tracking-[0.24em] text-bone/90 underline decoration-bone/30 underline-offset-[6px] transition-colors duration-300 hover:text-bone hover:decoration-bone"
            >
              Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-bone/70 sm:bottom-8">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.32em]">Scroll</span>
          <span className="block h-7 w-px bg-bone/40" />
        </div>
      </div>
    </section>
  );
}
