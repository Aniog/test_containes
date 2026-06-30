import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function BrandStory() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="bg-cream-warm py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep order-1">
            <img
              src={PLACEHOLDER}
              alt="Velmora atelier"
              data-strk-img-id="story-img-4d8e1b"
              data-strk-img="[story-text] [story-eyebrow] jewelry atelier craftsmanship gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2">
            <p id="story-eyebrow" className="text-xs uppercase tracking-widest3 text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso-800 leading-tight mb-6">
              Jewelry made to be lived in.
            </h2>
            <p id="story-text" className="text-espresso-700 leading-relaxed mb-5">
              Velmora began with a simple belief: that fine craftsmanship and warm,
              honest materials should not be reserved for special occasions. Every
              piece is hand-finished in 18K gold plating, designed to soften and
              glow with the years.
            </p>
            <p className="text-espresso-700 leading-relaxed mb-8">
              We work in small batches, with materials chosen to be gentle on skin
              and kind to the planet — demi-fine jewelry you reach for every morning.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
