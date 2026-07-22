import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden md:min-h-screen md:items-center">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7d2f91"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        role="img"
        aria-label="Warm-lit close-up of gold jewelry on a model"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#2B2118",
        }}
      />
      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/35 to-espresso/25 md:bg-gradient-to-r md:from-espresso/75 md:via-espresso/35 md:to-transparent" />

      {/* Hidden text feeding the image query */}
      <span className="sr-only">
        <span id="hero-headline">Crafted to be Treasured</span>
        <span id="hero-subtitle">
          Warm-lit close-up of demi-fine gold jewelry — earrings and layered
          necklaces worn on a model, editorial photography
        </span>
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-10 md:pb-0 md:pt-24">
        <div className="max-w-xl animate-fade-up">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-soft">
            <span className="h-px w-10 bg-gold-soft" aria-hidden="true" />
            Demi-Fine Jewelry · Est. 2019
          </p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-7xl">
            Crafted to be{" "}
            <em className="font-medium italic text-gold-soft">Treasured</em>
          </h1>
          <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-ivory/85 md:text-lg">
            Warm 18k gold pieces designed for everyday ritual — hypoallergenic,
            tarnish-resistant, and made to move with you from morning to
            midnight.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-bronze px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory transition-all duration-300 hover:bg-gold-soft hover:text-espresso"
            >
              Shop the Collection
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to="/about"
              className="border-b border-ivory/50 pb-1 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:border-gold-soft hover:text-gold-soft"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom hairline detail */}
      <div className="absolute inset-x-0 bottom-0 hidden justify-center pb-6 md:flex">
        <span className="h-10 w-px bg-ivory/40" aria-hidden="true" />
      </div>
    </section>
  );
}
