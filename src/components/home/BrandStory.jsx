import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] velmora jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-warm-black font-light leading-snug">
              Where Craft Meets<br />Everyday Elegance
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-warm-gray leading-relaxed mb-4"
            >
              Born from a belief that luxury should be lived in — not locked away — Velmora creates demi-fine jewelry that moves with you. Each piece is crafted with 18K gold plating over sterling silver, designed to be worn every day and treasured for years.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
              From our studio to your jewelry box, we obsess over every detail — the weight of a huggie, the catch of the light on a filigree drop, the way a necklace sits just right.
            </p>
            <Link
              to="/"
              className="inline-block border border-gold text-gold font-sans text-xs font-semibold tracking-wide-btn uppercase px-8 py-3 hover:bg-gold hover:text-warm-black transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
