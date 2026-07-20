import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/70" />
      <div className="absolute inset-0 bg-ink/20" />

      {/* Content */}
      <div className="relative h-full container-velmora flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif font-light text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight"
          >
            Crafted to be
            <br />
            <span className="italic text-champagne">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-cream/85 max-w-md leading-relaxed"
          >
            18K gold plated earrings, necklaces, and huggies — designed in studio
            and made to be worn every single day.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link to="/about" className="btn-outline-light">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="w-px h-8 bg-cream/40 animate-pulse" />
      </div>
    </section>
  )
}
