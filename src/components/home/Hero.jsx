import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
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
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-subtitle] [hero-headline] gold jewelry model warm"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] uppercase tracking-widest3 text-ivory/80 mb-5">
            Demi-Fine · 18K Gold Plated
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-medium"
          >
            Crafted to be
            <br />
            <span className="italic text-gold">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Quietly luxurious gold jewelry, made to live in. Designed in studio,
            crafted to be worn every day.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-ivory text-xs uppercase tracking-widest2 font-medium px-10 py-4 hover:bg-gold-deep transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/60">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="w-px h-8 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  )
}
