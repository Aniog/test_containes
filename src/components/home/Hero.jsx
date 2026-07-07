import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-velmora-espresso">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/40 via-velmora-espresso/20 to-velmora-espresso/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <span className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
          New Collection
        </span>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-4xl font-medium leading-[1.1] md:text-6xl lg:text-7xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-white/90 md:text-lg"
        >
          Demi-fine gold jewelry for the moments you want to remember — and the
          everyday ones in between.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
