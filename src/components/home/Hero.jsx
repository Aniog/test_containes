import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-ivory">
        <p className="mb-5 text-[11px] uppercase tracking-widest2 text-gold-light animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-tight animate-fade-up md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/85 md:text-base"
        >
          Warm-lit, hand-finished gold pieces designed for the everyday and the
          unforgettable. Quiet luxury, made to last.
        </p>
        <Link
          to="/shop"
          className="mt-9 bg-gold px-10 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-ivory"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-ivory/70" />
        </div>
      </div>
    </section>
  )
}
