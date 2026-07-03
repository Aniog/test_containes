import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9f2a"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm editorial close up"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-soft mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl leading-[1.05] mb-6"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream/85 text-base md:text-lg max-w-md leading-relaxed mb-9"
          >
            Warm, wearable gold — designed in studio and made for the everyday.
            Quietly luxurious, endlessly giftable.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-ink text-[11px] uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-soft transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
