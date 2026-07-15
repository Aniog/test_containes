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
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="fade-up font-sans text-xs uppercase tracking-widest2 text-cream/80">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-5 max-w-4xl font-serif text-5xl font-light leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-xl font-sans text-sm leading-relaxed text-cream/85 md:text-base"
        >
          Demi-fine gold jewelry, designed in studio and made to be worn every
          day. Quiet luxury, warmly lit, endlessly wearable.
        </p>
        <Link
          to="/shop"
          className="fade-up mt-9 bg-gold px-10 py-4 font-sans text-[11px] uppercase tracking-widest2 text-cream transition-colors duration-300 hover:bg-gold-deep"
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
