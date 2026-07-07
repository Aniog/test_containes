import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function BrandStory() {
  return (
    <section className="bg-ivory-deep py-20 md:py-28">
      <div className="container-editorial grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Image */}
        <div className="reveal relative aspect-[4/5] overflow-hidden bg-ink-soft">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-bg-velmora-2c8e"
            data-strk-bg="[brand-story-text] gold jewelry craftsmanship atelier warm editorial"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>

        {/* Text */}
        <div className="reveal">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
            Quiet luxury,
            <br />
            <span className="italic text-gold">made to last.</span>
          </h2>
          <p
            id="brand-story-text"
            className="mt-6 font-serif text-lg leading-relaxed text-ink/80"
          >
            Velmora was founded on a simple belief: that fine jewelry should be
            lived in, not locked away. We work in demi-fine 18K gold plating
            over sterling silver — the warmth of solid gold, at a price that
            invites the everyday.
          </p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-ink/80">
            Every piece is hypoallergenic, ethically made, and finished by hand.
            No noise, no discounts shouted — just considered objects, crafted to
            be treasured.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-ink transition-colors hover:text-gold"
          >
            Read Our Story
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
