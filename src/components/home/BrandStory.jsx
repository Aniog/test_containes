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
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-d4"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-6"
            >
              The Art of Everyday Luxury
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-stone-600 leading-relaxed mb-4"
            >
              At Velmora, we believe luxury should be lived in — not locked away. Each piece is crafted with 18K gold plating over sterling silver, designed to move with you from morning coffee to evening cocktails.
            </p>
            <p className="font-sans text-sm md:text-base text-stone-600 leading-relaxed mb-8">
              Our artisans blend timeless techniques with modern sensibility, creating jewelry that feels both heirloom and entirely now. No markups, no middlemen — just beautifully made pieces at honest prices.
            </p>
            <Link
              to="/about"
              className="inline-block border border-charcoal text-charcoal font-sans text-xs uppercase tracking-btn font-medium px-8 py-3 hover:bg-charcoal hover:text-cream transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
