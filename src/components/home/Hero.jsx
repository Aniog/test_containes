import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-espresso text-ivory">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-1c2d3e"
        data-strk-bg="[hero-tagline] [hero-subhead] [hero-headline]"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1800"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/10 to-espresso/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container-wide flex flex-col justify-end pb-24 md:pb-32">
        <p
          id="hero-tagline"
          className="kicker mb-5 text-gold-soft animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          The Velmora Collection
        </p>
        <h1
          id="hero-headline"
          className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight max-w-3xl text-balance"
          style={{ animation: "fade-up 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards", opacity: 0 }}
        >
          Crafted to be
          <br />
          <span className="italic font-normal text-gold-soft">treasured.</span>
        </h1>
        <p
          id="hero-subhead"
          className="mt-6 max-w-md text-base md:text-lg text-ivory/75 leading-relaxed text-pretty"
          style={{ animation: "fade-up 900ms cubic-bezier(0.22, 1, 0.36, 1) 400ms forwards", opacity: 0 }}
        >
          Demi-fine gold jewelry, hand-finished in small batches. Designed to
          wear every day, and keep for a lifetime.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center gap-4"
          style={{ animation: "fade-up 900ms cubic-bezier(0.22, 1, 0.36, 1) 600ms forwards", opacity: 0 }}
        >
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
          <Link
            to="/shop?category=sets"
            className="text-[12px] uppercase tracking-wider-2 font-medium text-ivory/90 hover:text-gold-soft transition-colors"
          >
            Discover Gift Sets →
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/60 animate-fade-in" style={{ animationDelay: "1200ms" }}>
          <span className="text-[10px] uppercase tracking-widest-2">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
