import React from "react"
import { Link } from "react-router-dom"
import { getImgUrl } from "@/lib/imgConfig"

export default function Hero() {
  const heroBg = getImgUrl("hero-bg-7f3a9c")

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-ink bg-cover bg-center"
        style={heroBg ? { backgroundImage: `url(${heroBg})` } : undefined}
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-cream/80 text-xs uppercase tracking-widest2 mb-6 fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl tracking-wide fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be
          <br />
          Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream/80 text-sm md:text-base mt-8 max-w-md leading-relaxed fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Warm-lit, hand-finished gold jewelry made for everyday luxury — and
          the moments worth keeping.
        </p>
        <div className="mt-10 fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/shop"
            className="inline-block bg-gold text-cream text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-gold-deep transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-cream/40" />
      </div>
    </section>
  )
}
