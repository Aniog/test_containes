import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useStrkImages } from "@/hooks/useStrkImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function Hero() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] md:min-h-[88svh] flex items-end md:items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          alt="Velmora hero — model wearing gold jewelry in warm light"
          data-strk-img-id="velmora-hero-1"
          data-strk-img="[hero-subtitle] [hero-title] [hero-eyebrow]"
          data-strk-img-ratio="3x2"
          data-strk-img-width="2000"
          src={PLACEHOLDER}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/55" />
      </div>

      {/* Content */}
      <div className="relative container-editorial pb-20 md:pb-0 pt-32 md:pt-0 w-full">
        <div className="max-w-2xl text-cream animate-fade-up">
          <p id="hero-eyebrow" className="text-[11px] uppercase tracking-[0.32em] text-cream/80">
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] text-cream mt-5 tracking-[-0.01em]"
          >
            Crafted to be<br />Treasured.
          </h1>
          <p
            id="hero-subtitle"
            className="mt-7 text-base md:text-lg text-cream/85 max-w-lg leading-relaxed font-light"
          >
            Demi-fine 18K gold plated jewelry, hand-finished in small batches.
            Designed for the everyday — and for the years after.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-cream text-ink px-9 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-gold hover:text-ink transition-colors duration-300 ease-editorial"
            >
              Shop the Collection
            </Link>
            <Link
              to="/shop?category=sets"
              className="inline-flex items-center justify-center border border-cream/70 text-cream px-9 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-cream/10 transition-colors duration-300 ease-editorial"
            >
              Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream/70">
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <span className="block w-px h-10 bg-cream/50" />
      </div>
    </section>
  );
}
