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
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
        <p
          id="hero-eyebrow"
          className="text-ivory/80 text-xs uppercase tracking-[0.3em] mb-6 fade-up"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] max-w-4xl fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <em className="italic text-gold-soft">Treasured</em>
        </h1>
        <p
          id="hero-subtitle"
          className="text-ivory/85 text-base md:text-lg mt-6 max-w-xl leading-relaxed fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Warm gold, hand-finished detail, and quiet luxury designed for the
          everyday and the unforgettable.
        </p>
        <div className="mt-10 fade-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-block bg-gold text-ivory text-xs uppercase tracking-[0.2em] font-medium px-10 py-4 hover:bg-gold-soft transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-ivory/40" />
      </div>
    </section>
  )
}
