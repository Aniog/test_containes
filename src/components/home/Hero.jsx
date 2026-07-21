import { Link } from "react-router-dom"

import { useRef, useEffect } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
      if (!ref.current) return
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="relative h-full max-w-8xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-ivory/80 text-[11px] md:text-xs uppercase tracking-widest2 mb-5">
            Demi-Fine · 18K Gold Plated
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-light"
          >
            Crafted to be
            <br />
            <span className="italic font-normal">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed font-light"
          >
            Warm gold, considered design. Jewelry made for the everyday and the
            unforgettable — worn close, kept forever.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ink text-[11px] md:text-xs uppercase tracking-widest3 font-medium px-9 py-4 hover:bg-ivory transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-ivory/60 text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="w-px h-8 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  )
}
