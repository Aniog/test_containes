import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Hero() {
  const containerRef = useStrkImages()

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative h-full container-velmora flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl">
          <p className="eyebrow text-cream/80 mb-5">Demi-Fine Gold Jewelry</p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Hand-finished 18K gold plated pieces, designed in studio and made
            for the everyday — and the unforgettable.
          </p>
          <div className="mt-9">
            <Link to="/shop" className="btn-accent">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
