import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-ivory">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="velmora-hero-bg-7c12a9"
        data-strk-bg="warm lit gold jewelry necklace earring close up on model dark editorial fashion"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundColor: '#1F1A14' }}
        aria-hidden="true"
      />
      {/* Warm vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative h-full max-w-[1320px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.4em] text-ivory/80 mb-6">
            The Heirloom Edit · 2026
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-light text-ivory"
          >
            Crafted to be<br />
            <span className="italic font-normal text-gold">Treasured</span>
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 text-base md:text-lg text-ivory/85 max-w-lg leading-relaxed"
          >
            Demi-fine jewelry in 18K gold plate, designed in New York and made to be
            worn every day and kept forever.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-gold text-ink px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-ivory hover:text-ink transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center text-xs tracking-[0.3em] uppercase font-medium text-ivory/90 hover:text-gold transition-colors duration-300 border-b border-ivory/30 hover:border-gold pb-1"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-10 right-10 items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ivory/60">
          <span>Scroll</span>
          <span className="block w-12 h-px bg-ivory/40" />
        </div>
      </div>
    </section>
  );
}
