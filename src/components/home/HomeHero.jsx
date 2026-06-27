import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import { PLACEHOLDER_SVG } from "@/lib/utils";

export default function HomeHero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-velmora-espresso">
      {/* Background image */}
      <div
        data-strk-bg-id="home-hero-bg-velmora-9f2a"
        data-strk-bg="[home-hero-subtitle] [home-hero-title] warm gold jewelry on model close up editorial low light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 w-full h-full bg-cover bg-center"
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/40 via-velmora-espresso/20 to-velmora-espresso/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-2xl velmora-fade-up">
          <span className="text-[11px] uppercase tracking-[0.36em] text-velmora-cream/80">
            The New Heirloom — 2026
          </span>
          <h1
            id="home-hero-title"
            className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-cream font-light leading-[0.95] tracking-tight"
          >
            Crafted to be
            <br />
            <em className="italic text-velmora-goldsoft font-normal">Treasured</em>.
          </h1>
          <p
            id="home-hero-subtitle"
            className="mt-6 max-w-md text-[15px] md:text-[16px] text-velmora-cream/85 leading-relaxed"
          >
            Demi-fine gold jewelry, shaped by hand and made to be lived in.
            Quiet pieces with the weight of an heirloom.
          </p>
          <div className="mt-10 flex items-center gap-5 flex-wrap">
            <Button as={Link} to="/shop" variant="onDark" size="lg">
              Shop the Collection
            </Button>
            <Link
              to="/about"
              className="text-[12px] uppercase tracking-[0.28em] text-velmora-cream/90 border-b border-velmora-cream/40 pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
