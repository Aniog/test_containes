import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-velmora-dark text-velmora-cream">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(26,26,26,0.2), rgba(26,26,26,0.5))",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:justify-center md:pb-0">
        <div className="max-w-2xl">
          <p
            id="hero-subtitle"
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-velmora-gold"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl font-medium leading-[1.05] md:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-velmora-cream/80 md:text-lg">
            Elegant earrings, necklaces, and huggies made for everyday luxury
            and unforgettable gifting.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-block bg-velmora-gold px-9 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-velmora-dark transition-colors hover:bg-velmora-gold-hover"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
