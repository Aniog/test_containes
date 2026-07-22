import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden md:items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title] warm-lit close-up of gold jewelry on a model, editorial photography, dark moody background"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/45 to-noir/20 md:bg-gradient-to-r md:from-noir/85 md:via-noir/40 md:to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-8 md:py-48">
        <div className="max-w-xl animate-fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-5xl font-medium leading-[1.05] text-cream md:text-7xl"
          >
            Crafted to be{" "}
            <span className="italic text-gold-soft">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md text-sm leading-relaxed text-cream/85 md:text-base"
          >
            Warm 18K gold plated pieces — earrings, necklaces and huggies — designed to be worn
            every day and kept for a lifetime.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-luxe text-noir transition-colors duration-300 hover:bg-gold-deep"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border border-cream/40 px-8 py-4 text-[11px] font-semibold uppercase tracking-luxe text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Hairline bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
