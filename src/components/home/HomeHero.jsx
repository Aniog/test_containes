import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function HomeHero() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
        style={{ opacity: 0 }}
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="animate-fade-up text-[11px] uppercase tracking-[0.4em] text-ivory/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="animate-fade-up mt-6 font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="animate-fade-up mt-6 max-w-md text-sm leading-relaxed text-ivory/85 md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          Hand-finished 18K gold plated pieces, designed in studio and made to be
          worn every single day.
        </p>
        <div className="animate-fade-up mt-9" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-ivory transition-colors duration-300 hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <span className="h-2 w-px animate-bounce bg-ivory/70" />
        </div>
      </div>
    </section>
  )
}
