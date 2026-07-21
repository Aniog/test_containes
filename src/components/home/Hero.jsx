import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso md:items-center">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-61c3d8"
        data-strk-bg="[hero-subtitle] [hero-title] warm cinematic close-up of elegant woman wearing layered gold necklaces and earrings, soft golden hour light on skin, dark warm background, luxury editorial jewelry campaign"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden="true"
      />
      {/* Warm gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/35 to-espresso/20" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8 md:pb-0 md:pt-28">
        <div className="max-w-2xl">
          <p className="reveal flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-gold">
            <span className="inline-block h-px w-10 bg-gold" aria-hidden="true" />
            Demi-Fine Jewelry · Est. Lisbon
          </p>
          <h1
            id="hero-title"
            className="reveal mt-6 font-serif text-5xl font-light leading-[1.05] text-ivory md:text-7xl lg:text-[5.25rem]"
          >
            Crafted to be
            <br />
            <em className="font-normal text-gold">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="reveal mt-6 max-w-md text-base leading-relaxed text-ivory/80 md:text-lg"
          >
            Demi-fine gold earrings, necklaces and huggies — plated in 18K gold, designed to be
            lived in and loved, every single day.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-5">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-gold px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-espresso transition-all duration-300 hover:bg-ivory"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="border-b border-ivory/40 pb-1 text-[11px] uppercase tracking-[0.3em] text-ivory/90 transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-[0.35em] text-ivory/50">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ivory/60 to-transparent" />
      </div>
    </section>
  );
}
