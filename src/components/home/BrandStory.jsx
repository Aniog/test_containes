import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StrkImage } from '@/components/ui/StrkImage'

export function BrandStory() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* image left */}
        <div className="relative aspect-[4/5] overflow-hidden bg-ink md:aspect-[5/6]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-bg-velmora-2c8e"
            data-strk-bg="[brand-story-text] [brand-story-title]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
          />
        </div>

        {/* text right */}
        <div className="md:pl-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Our Story</p>
          <h2
            id="brand-story-title"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Quiet luxury, made to be lived in.
          </h2>
          <p
            id="brand-story-text"
            className="mt-6 text-sm leading-relaxed text-taupe md:text-base"
          >
            Velmora was founded on a simple belief: fine jewelry should be felt,
            not flaunted. Each piece is hand-finished in 18K gold plate over
            solid brass, hypoallergenic and made to move with you — from morning
            coffee to candlelit dinners. We design in small, considered
            collections so every detail earns its place.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold-deep"
          >
            Read Our Story
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
