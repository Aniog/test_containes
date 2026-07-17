import React from "react";
import { Link } from "react-router-dom";
import { useStrkImages } from "@/hooks/useStrkImages";

export default function HomeHero() {
  const ref = useStrkImages([]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="relative h-full max-w-content mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl">
          <p className="text-cream/80 text-xs md:text-sm uppercase tracking-[0.28em] mb-5 animate-fade-in">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight animate-fade-up"
          >
            Crafted to be
            <br />
            <span className="italic text-champagne">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Warm gold, hand-finished detail, made for everyday wear — and the
            moments worth keeping.
          </p>
          <div className="mt-9 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/shop"
              className="inline-block bg-gold text-cream text-xs md:text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream/70">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="w-px h-8 bg-cream/40 animate-pulse" />
      </div>
    </section>
  );
}
