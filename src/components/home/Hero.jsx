import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-cream">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7d2a4f"
        data-strk-bg={`[hero-subtitle] [hero-title] warm gold demi-fine jewelry on model close-up editorial`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
      />
      {/* Overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-ink/70" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fadeUp">
          <p className="font-sans uppercase tracking-widest2 text-[11px] text-cream/80 mb-5">
            New Arrivals · Spring Edit
          </p>
          <h1
            id="hero-title"
            className="font-serif text-[clamp(2.75rem,7vw,5.25rem)] leading-[1.02] text-cream"
          >
            Crafted to be<br />
            <span className="italic text-gilt">Treasured.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md font-sans text-base md:text-lg text-cream/85 leading-relaxed"
          >
            Demi-fine gold jewelry, hand-finished and made to live with you —
            from the everyday to the unforgettable.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/shop" variant="accent" size="lg">
              Shop the Collection
            </Button>
            <Button as={Link} to="/about" variant="ghost" size="lg" className="text-cream hover:text-gilt">
              Our Story →
            </Button>
          </div>
        </div>
      </div>

      {/* subtle scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-widest2 text-cream/70">Scroll</span>
        <span className="block w-px h-10 bg-cream/40" />
      </div>
    </section>
  );
}
