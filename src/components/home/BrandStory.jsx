import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-4x5 bg-deep-brown rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover img-zoom"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-heading"
              className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-text-primary"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-muted-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-text-secondary leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry shouldn't require a fine-art budget. Every piece in our collection is crafted with the same care and attention as the finest houses — 18K gold plating, hypoallergenic materials, and designs that transcend seasons.
            </p>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-8">
              From our studio to your jewelry box, each piece passes through the hands of artisans who believe that the details make the difference.
            </p>
            <Link
              to="/about"
              className="inline-block border border-muted-gold text-muted-gold px-8 py-3 text-xs font-medium uppercase tracking-ultra-wide hover:bg-muted-gold hover:text-warm-black transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
