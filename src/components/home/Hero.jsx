import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end md:min-h-screen md:items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] close-up warm-lit photograph on a model dark neutral backdrop"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        role="img"
        aria-label="Warm-lit close-up of gold jewelry on a model"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/40 md:bg-gradient-to-r md:from-ink/70 md:via-ink/30 md:to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-8 md:pb-0">
        <div className="max-w-xl animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold-soft">
            Demi-Fine · 18K Gold Plated
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-5xl font-medium leading-[1.05] text-cream md:text-7xl"
          >
            Crafted to be{" "}
            <em className="italic text-gold-soft">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md text-base leading-relaxed text-cream/80 md:text-lg"
          >
            Everyday heirlooms in warm gold — demi-fine jewelry designed to be
            lived in, loved, and passed on. Honest prices, $30–$120.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-gold px-9 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-gold-deep"
            >
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-cream/40 px-9 py-4 text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px bg-cream/40">
          <div className="h-4 w-px animate-pulse bg-gold" />
        </div>
      </div>
    </section>
  );
}
