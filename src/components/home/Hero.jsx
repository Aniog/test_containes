import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-end overflow-hidden bg-cocoa">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f2a9c"
        data-strk-bg="[hero-headline] [hero-subhead] model wearing gold jewelry"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/40 via-cocoa/15 to-cocoa/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-wide w-full px-5 md:px-8 lg:px-12 pb-20 md:pb-28 lg:pb-32 pt-32">
        <div className="max-w-2xl">
          <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.32em] text-gold-soft mb-6 md:mb-8">
            The Velmora Atelier · Est. 2021
          </p>
          <h1
            id="hero-headline"
            className="serif-display text-5xl md:text-7xl lg:text-[88px] leading-[0.95] text-ivory-light"
          >
            Crafted to be <em className="italic font-light text-gold-soft">treasured</em>.
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 md:mt-8 text-base md:text-lg text-ivory/85 leading-relaxed max-w-lg font-light"
          >
            Demi-fine 18K gold jewelry, hand-finished in our Los Angeles studio.
            Made to layer, made to last, made for the everyday.
          </p>
          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-claret hover:bg-claret-dark text-ivory-light px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ease-editorial"
            >
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              to="/shop?category=sets"
              className="inline-flex items-center gap-2 text-ivory-light text-[11px] font-medium uppercase tracking-[0.18em] hover:text-gold-soft transition-colors duration-300"
            >
              Discover Gifts
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 right-6 md:right-12 flex items-center gap-3 text-ivory/60 text-[10px] uppercase tracking-[0.32em]">
        <span>Scroll</span>
        <span className="block h-px w-10 bg-ivory/40" />
      </div>
    </section>
  );
}
