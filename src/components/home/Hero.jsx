import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StrkBackground } from '@/components/product/StrkBackground'

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-cream">
      <StrkBackground
        id="hero-bg"
        query="[hero-subtitle] [hero-title]"
        ratio="3x4"
        width={1600}
        className="absolute inset-0 bg-deep"
        aria-hidden="true"
      />
      {/* Warm gradient overlay to keep the headline legible regardless of
          the photo returned by the image system. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-deep/30 via-deep/20 to-deep/70"
        aria-hidden="true"
      />

      <div className="relative h-full container-page flex flex-col justify-end pb-16 md:pb-24">
        <p
          id="hero-eyebrow"
          className="eyebrow-light text-cream/85 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          The Velmora Collection · 2026
        </p>
        <h1
          id="hero-title"
          className="display-1 mt-4 max-w-3xl text-cream animate-fade-up"
          style={{ animationDelay: '0.25s' }}
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-base md:text-lg text-cream/85 font-sans leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Demi-fine 18K gold-plated jewelry, designed in our New York studio and made by
          hand for the everyday and the heirloom.
        </p>
        <div
          className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          <Link to="/shop" className="btn-outline-light">
            Shop the Collection
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
          <Link
            to="/shop/sets"
            className="text-cream/85 font-serif italic text-base hover:text-champagne transition-colors"
          >
            or discover gift sets
          </Link>
        </div>
      </div>

      {/* Hairline scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-cream/65">
        <span className="text-[10px] tracking-eyebrow uppercase font-sans mb-2">Scroll</span>
        <span className="w-px h-10 bg-cream/40" />
      </div>
    </section>
  )
}
