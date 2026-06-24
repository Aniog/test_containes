import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-bone">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg="[hero-headline] [hero-subline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
        style={{
          backgroundColor: "#1a1614",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Soft warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/75" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <p className="text-[11px] tracking-[0.4em] uppercase text-gold-soft fade-up">
          New Collection · Summer 2026
        </p>

        <h1
          id="hero-headline"
          className="font-serif font-light text-5xl sm:text-6xl md:text-8xl leading-[1.02] mt-4 md:mt-6 max-w-3xl fade-up"
          style={{ animationDelay: "120ms" }}
        >
          Crafted to be<br />
          <span className="italic text-gold-soft">Treasured</span>
        </h1>

        <p
          id="hero-subline"
          className="mt-6 md:mt-8 max-w-md text-sm md:text-base text-bone/85 leading-relaxed fade-up"
          style={{ animationDelay: "240ms" }}
        >
          Demi-fine gold jewelry, hand-finished in small batches. Quiet pieces
          designed to be worn every day, and kept for many.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5 fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-gold text-bone hover:bg-gold-deep transition-colors px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium"
          >
            Shop the Collection
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center border border-bone/50 text-bone hover:bg-bone hover:text-ink transition-colors px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-bone/70 text-[10px] tracking-[0.3em] uppercase">
        Scroll
      </div>
    </section>
  );
}
