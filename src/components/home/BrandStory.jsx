import React from "react"
import { Link } from "react-router-dom"
import { resolveImg } from "@/lib/utils"

export default function BrandStory() {
  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink/40">
          <img
            alt="Velmora jewelry craftsmanship"
            src={resolveImg("brand-story-img")}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Jewelry made to be lived in.
          </h2>
          <p id="story-text" className="mt-6 text-sm leading-relaxed text-cream/75 md:text-base">
            Velmora began with a simple belief: fine jewelry shouldn't wait for
            special occasions. We design demi-fine pieces in solid brass cores
            with 18K gold plating — the warmth and weight of fine jewelry, at a
            price that lets you wear it every day.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cream/75 md:text-base">
            Every piece is hand-finished in our studio, hypoallergenic, and made
            to be treasured for years.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border border-cream/40 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-cream hover:text-ink"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
