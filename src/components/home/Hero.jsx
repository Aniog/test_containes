import React from "react"
import { Link } from "react-router-dom"
import { resolveImg } from "@/lib/utils"

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <img
        alt="Model wearing Velmora gold jewelry in warm light"
        src={resolveImg("hero-bg-velmora")}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="fade-up text-xs uppercase tracking-[0.3em] text-cream/80">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-5 font-serif text-5xl leading-[1.05] text-cream md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-md text-sm leading-relaxed text-cream/85 md:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          Demi-fine gold jewelry, designed in studio and made to be worn every
          single day.
        </p>
        <Link
          to="/shop"
          className="fade-up mt-9 bg-gold px-10 py-4 text-xs uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-gold-soft"
          style={{ animationDelay: "0.3s" }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/50 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
