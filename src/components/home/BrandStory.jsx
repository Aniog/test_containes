import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#f5f5f0]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-bg"
            data-strk-bg="[brand-story-title] [brand-story-text]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
          <span id="brand-story-title" className="hidden">
            Velmora Fine Jewelry craftsmanship
          </span>
          <span id="brand-story-text" className="hidden">
            Handcrafted gold jewelry with quiet luxury
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl">Our Story</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-current/70 sm:text-base">
            <p>
              Velmora was born from a simple belief: fine jewelry should feel effortless. Founded in 2020,
              we design demi-fine pieces that bridge the gap between everyday wear and special occasions.
            </p>
            <p>
              Every design begins with a sketch in our London studio, where our artisans combine
              time-honored techniques with modern silhouettes. We use 18K gold-plated recycled brass,
              hypoallergenic findings, and ethically sourced crystals.
            </p>
            <p>
              The result is jewelry that feels luxurious, wears beautifully, and stays out of your way
              until you want it to shine.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-current/80 hover:text-current transition-colors"
            >
              Read More
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
