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
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 lg:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-stone-600 leading-relaxed mb-4"
            >
              At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. Each piece is crafted with the same care and attention as heirloom jewelry — 18K gold plated over sterling silver, hand-finished to catch the light beautifully.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Our designs draw from the quiet confidence of modern femininity: understated, intentional, and made to be worn every day. From our studio to your jewelry box, every detail matters.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold px-8 py-3 text-xs font-semibold uppercase tracking-wide-product hover:bg-gold hover:text-white transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
