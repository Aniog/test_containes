import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso">
      {/* Background image — model wearing gold jewelry, warm light */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-eyebrow] [hero-headline] [hero-subhead] gold jewelry on model warm light editorial"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      />

      {/* Soft warm veil to keep text legible without losing the image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-espresso/55 via-espresso/30 to-espresso/65" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-espresso/50 via-transparent to-transparent md:from-espresso/40" />

      <div className="relative z-10 flex h-full flex-col justify-end pb-20 md:justify-center md:pb-0">
        <div className="container-velmora">
          <div className="max-w-2xl animate-fade-in">
            <p
              id="hero-eyebrow"
              className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-champagne-100"
            >
              Velmora Fine Jewelry · Est. 2024
            </p>
            <h1
              id="hero-headline"
              className="editorial-h1 mt-5"
            >
              Crafted to be{" "}
              <span className="italic text-champagne-200">Treasured</span>
            </h1>
            <p
              id="hero-subhead"
              className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory-300/85 sm:text-[16px]"
            >
              Demi-fine gold jewelry, hand-finished in small batches.
              Designed for the everyday and the heirloom in waiting.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/about"
                className="font-sans text-[12px] font-medium uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:text-champagne-200"
              >
                Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory-300/60 md:flex">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="h-10 w-px bg-ivory-300/30" />
      </div>
    </section>
  )
}
