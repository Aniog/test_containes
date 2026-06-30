import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-noir">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-tagline] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-noir/40 via-noir/15 to-noir/80"
      />

      <div className="relative z-10 w-full mx-auto max-w-page px-6 md:px-12 pb-20 md:pb-28 pt-32">
        <p id="hero-kicker" className="kicker kicker-on-dark text-bone-soft">
          New Collection · Spring
        </p>
        <h1
          id="hero-headline"
          className="mt-5 headline-xl text-bone max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-tagline"
          className="mt-6 max-w-md editorial-body editorial-body-on-dark"
        >
          Demi-fine jewelry in 18K gold plating, made to be worn every day and kept for a lifetime.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
          <Link
            to="/shop"
            className="btn-primary !bg-bone !text-espresso !border-bone hover:!bg-white"
          >
            Shop the Collection
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
          <Link to="/about" className="underline-link underline-link-on-dark">
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-bone-soft">
        <span className="font-sans text-[10px] tracking-[0.32em] uppercase">
          Scroll
        </span>
        <span className="mt-2 h-8 w-px bg-bone-soft/60" />
      </div>
    </section>
  )
}
