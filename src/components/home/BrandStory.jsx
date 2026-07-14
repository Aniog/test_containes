import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function BrandStory() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-espresso">
            <img
              data-strk-img-id="story-img-4d8e1b"
              data-strk-img="[story-text] [story-heading] gold jewelry craftsmanship atelier warm editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={PLACEHOLDER}
              alt="Velmora atelier"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6"
            >
              Quiet luxury, made to be lived in.
            </h2>
            <p
              id="story-text"
              className="text-stone leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that fine gold jewelry
              should not be reserved for rare occasions. Each piece is
              hand-finished in 18K gold plating over sterling silver, designed
              to be worn, layered, and treasured every single day.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              From the first sketch to the final polish, we obsess over the
              details — the weight of a huggie, the catch of light on a crystal,
              the warmth of gold against the skin. This is demi-fine jewelry,
              without the markup.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-ink border border-ink px-10 py-4 hover:bg-ink hover:text-ivory transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
