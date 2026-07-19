import React from "react"
import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div
        className="absolute inset-0 bg-velmora-smoke"
        data-strk-bg-id="home-hero-bg-l8q2s4"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/80 via-velmora-espresso/40 to-velmora-espresso/10" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-velmora-espresso/75 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-36 sm:px-8 md:pb-28">
        <div className="max-w-3xl animate-floatIn">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">
            Fine jewelry for everyday rituals
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.9] text-velmora-ivory md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-pearl md:text-lg">
            Warm, demi-fine gold pieces designed for the moments you gift, keep, and wear on repeat.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/shop" variant="accent">
              Shop the Collection
            </Button>
            <Button as="a" href="#bestsellers" variant="ghost" className="border border-velmora-ivory/25 text-velmora-ivory hover:bg-velmora-ivory hover:text-velmora-espresso">
              View Bestsellers
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
