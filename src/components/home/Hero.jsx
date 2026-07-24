import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-paper"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-1a2b3c"
        data-strk-bg="close up of warm lit gold jewelry on a model ear and neck on dark background, editorial fashion photography, soft warm light"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      />
      {/* Dark gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,17,15,0.35) 0%, rgba(20,17,15,0.10) 35%, rgba(20,17,15,0.55) 100%)",
        }}
      />

      {/* Headline content */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32">
        <div className="mx-auto w-full max-w-8xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p
              id="hero-eyebrow"
              className="text-[10px] font-medium uppercase tracking-[0.42em] text-champagne md:text-[11px]"
            >
              The Velmora Edit — Summer 2026
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]"
            >
              Crafted to be
              <br className="hidden md:block" />{" "}
              <span className="italic font-light text-champagne">Treasured</span>
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-md text-sm leading-relaxed text-paper/80 md:text-base"
            >
              Demi-fine gold jewelry, finished by hand. Designed in small
              collections, made to wear every day.
            </p>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Link
                to="/shop"
                className="inline-block bg-paper px-9 py-4 text-[11px] uppercase tracking-[0.32em] text-ink transition-colors duration-300 hover:bg-gold hover:text-ink"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop?category=earrings"
                className="inline-block text-[11px] uppercase tracking-[0.32em] text-paper/80 underline-offset-[6px] transition-opacity duration-300 hover:opacity-70 hover:underline"
              >
                Discover Earrings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.42em] text-paper/60 md:block">
        Scroll
      </div>
    </section>
  )
}
