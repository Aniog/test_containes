import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function BrandStory() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-5 md:px-8 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[5/6]">
          <img
            alt="Velmora jewelry craftsmanship"
            data-strk-img-id="story-img-velmora-3d8f1a"
            data-strk-img="[story-body] [story-title] gold jewelry craftsmanship studio"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Jewelry made to live with you
          </h2>
          <p
            id="story-body"
            className="mt-6 text-base leading-relaxed text-ink-soft"
          >
            Velmora began with a simple belief: fine jewelry shouldn't be saved
            for special occasions. We design demi-fine pieces in 18K gold plating
            that feel substantial, wear beautifully, and cost a fraction of fine
            jewelry — so you can reach for them every morning without a second
            thought.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Every piece is hand-finished in small batches, hypoallergenic, and
            made to be treasured for years, not seasons.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-ink transition-colors hover:text-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
