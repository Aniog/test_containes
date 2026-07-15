import React from "react";
import { Link } from "react-router-dom";
import StrkImage from "@/components/ui/StrkImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] bg-cocoa text-ivory overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-eyebrow] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1800"
      />
      {/* Soft warm gradient veil so the editorial photo sits behind readable text */}
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/30 via-cocoa/30 to-cocoa/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-cocoa/40 via-transparent to-transparent" />

      <div className="relative container-shell min-h-[100svh] flex flex-col justify-end pb-16 sm:pb-20 md:pb-28 pt-28">
        <div className="max-w-2xl">
          <span id="hero-eyebrow" className="text-[11px] uppercase tracking-[0.32em] text-gold-pale">
            Velmora · A/W Collection
          </span>
          <h1
            id="hero-title"
            className="mt-5 font-serif font-light text-ivory text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight"
          >
            Crafted to be
            <br />
            <span className="italic font-normal text-gold-pale">Treasured.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-ivory/80 text-base sm:text-lg max-w-md leading-relaxed"
          >
            Demi-fine gold jewelry, cast in small batches and finished by hand —
            pieces designed to live in, not to be saved.
          </p>
          <div className="mt-9 flex items-center gap-4">
            <Link to="/shop" className="btn-accent">
              Shop the Collection
            </Link>
            <Link
              to="/shop?collection=sets"
              className="text-[12px] uppercase tracking-[0.22em] text-ivory/80 hover:text-ivory border-b border-ivory/30 hover:border-ivory pb-1 transition-colors"
            >
              Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Tiny scroll cue */}
      <div className="hidden md:flex absolute bottom-6 right-8 lg:right-16 items-center gap-3 text-ivory/70 text-[11px] uppercase tracking-[0.28em]">
        <span className="w-10 h-px bg-ivory/40" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
