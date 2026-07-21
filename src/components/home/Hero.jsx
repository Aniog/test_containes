import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on woman warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-cream/80 reveal is-visible">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="mt-5 font-serif text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl reveal is-visible"
        >
          Crafted to be
          <br />
          <span className="italic text-gold">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-cream/80 sm:text-base reveal is-visible"
        >
          Warm-lit, hand-finished gold jewelry made for the everyday and the
          unforgettable. Designed in studio, worn for a lifetime.
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-flex items-center justify-center bg-gold px-10 py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-gold-deep reveal is-visible"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <span className="h-2 w-px animate-bounce bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
