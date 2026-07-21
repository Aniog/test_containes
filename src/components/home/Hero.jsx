import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../../strk-img-config.json"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-bone"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1800"
      />
      {/* Warm tint + darkening overlay so text reads against any image */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(201, 163, 107, 0.18) 0%, transparent 55%), linear-gradient(180deg, rgba(26, 18, 11, 0.25) 0%, rgba(26, 18, 11, 0.55) 60%, rgba(26, 18, 11, 0.85) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-editorial flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <p className="text-[10px] uppercase tracking-[0.32em] text-bone/70 animate-fadeUp">
          New arrivals · Winter '26
        </p>
        <h1
          id="hero-title"
          className="mt-4 max-w-[16ch] font-serif text-[44px] font-light leading-[1.02] text-bone sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Crafted to be <em className="font-serif italic text-champagne-100">Treasured</em>.
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-[44ch] font-serif text-lg leading-relaxed text-bone/80 sm:text-xl"
        >
          Demi-fine 18K gold-plated jewelry, made for everyday ritual and the rare occasions.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 bg-bone px-7 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ink transition-all duration-300 ease-soft hover:bg-champagne hover:text-ink"
          >
            Shop the Collection
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-bone/40 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-bone transition-colors duration-300 hover:border-bone hover:bg-bone/10"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Editorial caption in the corner */}
      <div className="pointer-events-none absolute bottom-8 right-6 z-10 hidden text-right md:block md:right-10">
        <p className="text-[10px] uppercase tracking-[0.32em] text-bone/60">
          Photography · Velmora Studio
        </p>
      </div>
    </section>
  )
}
