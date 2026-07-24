import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-primary"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-primary/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <p
            id="hero-subtitle"
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/80"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="max-w-3xl font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight"
          >
            Crafted to be Treasured
          </h1>
          <p className="mt-6 max-w-md text-base md:text-lg font-light leading-relaxed text-white/80">
            Timeless silhouettes in 18k gold plate, made for everyday elegance
            and quiet luxury.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-sm uppercase tracking-[0.15em] bg-white text-primary hover:bg-white/90"
            >
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </section>
  )
}
