import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Hero() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/40 via-espresso-900/20 to-espresso-900/60" />

      {/* Content */}
      <div className="relative h-full container-editorial flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs uppercase tracking-widest3 text-gold-soft mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream/85 text-base md:text-lg max-w-md mb-9 leading-relaxed"
          >
            Warm gold, hand-finished detail, and quiet brilliance — pieces made to be
            worn every day and kept for always.
          </p>
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
