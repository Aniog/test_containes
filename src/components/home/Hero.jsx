import React from 'react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-velmora-charcoal">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(28,25,23,0.3), rgba(28,25,23,0.5))' }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-velmora-text-light">
        <p
          id="hero-subtitle"
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-gold"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl font-medium leading-[1.05] md:text-6xl lg:text-7xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-velmora-text-light/80 md:text-lg">
          Timeless pieces for everyday elegance. Designed for women who value quiet luxury.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-velmora-gold px-10 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-velmora-charcoal transition-colors duration-300 hover:bg-velmora-gold-light"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
