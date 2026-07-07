import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function BrandStory() {
  return (
    <section className="bg-velmora-linen">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-velmora-espresso md:aspect-auto">
            <img
              data-strk-img-id="brand-story-portrait"
              data-strk-img="[story-subtitle] [story-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover opacity-90"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold">Our Story</p>
            <h2
              id="story-title"
              className="mt-4 font-serif text-3xl leading-tight md:text-4xl lg:text-5xl"
            >
              Jewelry for the Moments That Matter
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-base leading-relaxed text-velmora-text-muted"
            >
              Velmora was born from a love of understated glamour. We design demi-fine pieces that feel heirloom-quality yet live effortlessly in your everyday — from morning coffee to evening celebrations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-velmora-text-muted">
              Every piece is 18K gold-plated, nickel-free, and crafted to be treasured for years, not seasons.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              Read Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
