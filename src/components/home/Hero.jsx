import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-champagne mb-6 animate-fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] max-w-4xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-xl text-base md:text-lg text-ivory/85 font-light leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Hand-finished 18K gold plated pieces, designed in studio and made to
          be worn every single day.
        </p>
        <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-gold px-10 py-5 text-xs uppercase tracking-[0.25em] text-ivory hover:bg-gold-deep transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/50 p-1.5">
          <span className="h-2 w-1 rounded-full bg-ivory/80 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
