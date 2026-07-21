import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-1a2b3c"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-warm-black text-3xl md:text-4xl font-light uppercase tracking-[0.15em]"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-muted-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-warm-gray text-sm md:text-base leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry shouldn't require a fine jewelry budget. Every piece in our collection is crafted with the same care and attention as the finest houses — 18K gold plating, hypoallergenic materials, and designs that transcend seasons.
            </p>
            <p className="text-warm-gray text-sm md:text-base leading-relaxed mb-8">
              From our studio to your jewelry box, each piece is a testament to the idea that luxury is a feeling, not a price tag.
            </p>
            <Link
              to="/about"
              className="inline-block border border-muted-gold text-muted-gold px-8 py-3 text-xs uppercase tracking-[0.25em] hover:bg-muted-gold hover:text-warm-black transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
