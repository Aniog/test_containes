import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/60" />

      {/* Content */}
      <div className="container-editorial relative z-10 flex flex-col items-center text-center">
        <p className="eyebrow text-ivory/80 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="mt-6 max-w-4xl font-serif text-5xl font-light leading-[1.05] text-ivory animate-fade-up sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be
          <br />
          <span className="italic text-gold-light">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-7 max-w-xl font-serif text-lg italic text-ivory/85 animate-fade-up md:text-xl"
          style={{ animationDelay: "0.15s" }}
        >
          18K gold plated earrings, necklaces and huggies — designed for the
          everyday and the unforgettable.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-up sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="/shop" className="btn-accent group">
            Shop the Collection
            <ArrowRight
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
          <Link
            to="/about"
            className="font-sans text-xs uppercase tracking-widest text-ivory transition-colors hover:text-gold-light"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-ivory/70" />
        </div>
      </div>
    </section>
  )
}
