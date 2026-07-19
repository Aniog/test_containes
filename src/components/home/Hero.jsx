import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center md:px-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-champagne fade-up">
          Velmora Fine Jewelry
        </span>
        <h1
          id="hero-title"
          className="mt-5 max-w-3xl font-serif text-5xl font-light leading-[1.05] text-cream fade-up md:text-7xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 fade-up md:text-base"
        >
          Demi-fine gold jewelry, made to be worn every day. Warm, weighty, and quietly
          luxurious — designed in studio, treasured for years.
        </p>
        <Link
          to="/shop"
          className="mt-9 bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:bg-gold-deep fade-up"
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
