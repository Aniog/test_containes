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
    <section ref={containerRef} className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-1a2b3c"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 lg:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-stone-600 font-sans text-sm md:text-base leading-relaxed mb-4"
            >
              At Velmora, we believe luxury should be lived in — not locked away. Each piece is crafted with 18K gold plating over sterling silver, designed to move with you from morning coffee to evening cocktails.
            </p>
            <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed mb-8">
              Our artisans blend timeless techniques with modern sensibility, creating jewelry that feels both heirloom and entirely new. No markups, no middlemen — just beautifully made pieces at honest prices.
            </p>
            <Link to="/about" className="btn-secondary">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
