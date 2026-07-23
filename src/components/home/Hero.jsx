import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-content flex-col items-center justify-center px-6 text-center md:px-10">
        <p className="mb-5 font-sans text-xs uppercase tracking-[0.4em] text-cream/80 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
        >
          Crafted to be
          <br />
          <span className="italic text-gold-soft">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/85 md:text-base animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          18K gold plated earrings, necklaces, and huggies — designed in studio,
          made to be worn every day.
        </p>
        <Link
          to="/shop"
          className="mt-9 bg-gold px-10 py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-all duration-300 hover:bg-gold-soft hover:shadow-soft animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
