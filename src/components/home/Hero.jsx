import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-ivory">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-9a3f12"
        data-strk-bg="[hero-subhead] [hero-headline] gold jewelry on model warm editorial low light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
      />
      {/* Warm darkening overlay so editorial text always reads */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-page mx-auto px-5 md:px-10 lg:px-16 flex items-end pb-20 md:pb-28">
        <div className="max-w-2xl fade-up">
          <p className="text-[11px] uppercase tracking-wider2 text-goldSoft mb-5">
            Velmora — Demi-Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl leading-[1.05] text-ivory"
          >
            Crafted to be<br />
            <em className="not-italic text-goldSoft">Treasured</em>.
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 text-base md:text-lg text-ivory/80 max-w-lg leading-relaxed"
          >
            Hand-finished 18K gold pieces, designed to live on your skin every day —
            and to be passed on, generation to generation.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="bg-gold text-ivory px-8 py-4 tracking-editorial uppercase text-[11px] inline-flex items-center gap-2 hover:bg-goldDeep transition"
            >
              Shop the Collection
              <ChevronRight size={14} strokeWidth={1.6} />
            </Link>
            <Link
              to="/about"
              className="text-ivory border-b border-ivory/40 pb-1 text-[11px] uppercase tracking-editorial hover:text-goldSoft hover:border-goldSoft transition"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 md:right-10 z-10 hidden md:flex items-center gap-3 text-[10px] tracking-editorial uppercase text-ivory/60">
        <span className="w-10 h-px bg-ivory/40" />
        Scroll
      </div>
    </section>
  );
}
