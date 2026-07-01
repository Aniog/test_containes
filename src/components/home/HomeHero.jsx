import React from "react"
import { Link } from "react-router-dom"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function HomeHero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora-7f3a"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-28">
        <div className="max-w-2xl">
          <p className="text-ivory/80 text-[11px] uppercase tracking-[0.3em] mb-5 fade-up">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl leading-[1.05] fade-up"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed fade-up"
          >
            Warm gold, hand-set crystals, and quiet luxury — designed for the
            everyday and the unforgettable.
          </p>
          <div className="mt-9 fade-up">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory uppercase tracking-[0.18em] text-xs px-10 py-4 hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
