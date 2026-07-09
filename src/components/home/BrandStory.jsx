import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

export default function BrandStory() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-sand order-1">
            <img
              alt="Velmora atelier"
              data-strk-img-id="story-img-velmora-4d5e6f"
              data-strk-img="[story-text] [story-heading] gold jewelry atelier craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2">
            <p className="eyebrow mb-4">Our Story</p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Quietly Made,
              <br />
              Made to Last
            </h2>
            <p
              id="story-text"
              className="mt-6 text-stone leading-relaxed text-base md:text-lg"
            >
              Velmora began with a simple belief: that beautiful, lasting gold
              jewelry should be within reach. Each piece is hand-finished in
              small batches, plated in genuine 18K gold, and made to be worn —
              not saved for a special occasion that never comes.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              We design in studio, source responsibly, and price honestly. No
              markups for the sake of it. Just jewelry crafted to be treasured.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-outline">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
