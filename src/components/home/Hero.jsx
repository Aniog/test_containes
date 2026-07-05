import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex items-end overflow-hidden bg-noir text-ivory"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry editorial close up warm light"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      />
      {/* Warm gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir/30 via-noir/10 to-noir/80" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/40 to-transparent" aria-hidden />

      <div className="container-page relative z-10 pb-20 md:pb-28 lg:pb-32 pt-32 md:pt-40">
        <div className="max-w-2xl">
          <p
            id="hero-eyebrow"
            className="text-[11px] uppercase tracking-widest3 text-ivory/80 font-medium"
          >
            Velmora Fine Jewelry · Est. 2021
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ivory"
          >
            Crafted to be<br />
            <span className="italic font-light">treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-ivory/80 max-w-lg font-light leading-relaxed"
          >
            Demi-fine gold jewelry, hand-finished and made for everyday ritual.
            Designed in Paris. Worn everywhere.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="text-[11px] uppercase tracking-widest2 font-medium text-ivory/80 hover:text-ivory border-b border-ivory/40 hover:border-ivory pb-1 self-start sm:self-auto transition-colors"
            >
              Read our story
            </Link>
          </div>
        </div>
      </div>

      {/* Tiny scroll hint */}
      <div className="hidden md:flex absolute right-10 lg:right-16 bottom-10 z-10 items-center gap-3 text-ivory/60 text-[10px] uppercase tracking-widest3 font-medium">
        <span className="h-px w-10 bg-ivory/30" aria-hidden />
        Scroll
      </div>
    </section>
  )
}
