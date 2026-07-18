import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
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
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-headline] warm gold jewelry worn on model editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          id="hero-eyebrow"
          className="mb-5 text-[11px] uppercase tracking-widest2 text-cream/80 fade-up"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-cream fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be
          <br />
          <span className="italic text-champagne">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-cream/85 fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Hand-finished 18K gold plated pieces, designed in studio and made for
          everyday wear — and a lifetime of gifting.
        </p>
        <div className="mt-9 fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/shop"
            className="inline-block bg-champagne px-10 py-4 text-[11px] uppercase tracking-widest2 text-cream hover:bg-champagne-deep transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <span className="block h-10 w-px bg-cream/40" />
      </div>
    </section>
  )
}
