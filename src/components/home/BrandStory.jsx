import React from "react"
import { Link } from "react-router-dom"

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] md:aspect-[5/6] bg-espresso overflow-hidden">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-bg-velmora-2c8e"
            data-strk-bg="[brand-story-text] gold jewelry craftsmanship studio warm editorial"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          />
        </div>

        {/* Text */}
        <div className="md:pl-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
            Est. 2019
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
            Jewelry made to be lived in.
          </h2>
          <p
            id="brand-story-text"
            className="mt-6 text-espresso-soft leading-relaxed"
          >
            Velmora began with a simple belief: fine-feeling jewelry shouldn't
            require a fine-jewelry price. We work in small batches with 18K gold
            plating over solid brass, hand-setting every crystal and finishing
            each piece by hand. The result is demi-fine jewelry with the weight,
            warmth, and presence of the real thing — made for the everyday and
            the unforgettable.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block border border-espresso text-espresso uppercase tracking-[0.18em] text-xs px-10 py-4 hover:bg-espresso hover:text-ivory transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
