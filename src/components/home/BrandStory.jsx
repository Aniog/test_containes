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
    <section ref={containerRef} className="py-16 md:py-24 bg-stone-100">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-9k2m4"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-2xl md:text-3xl tracking-[0.1em] uppercase text-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-champagne mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-stone-600 leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry should be accessible,
              wearable, and made to last. Every piece is crafted with 18K gold plating over
              sterling silver, designed to transition effortlessly from morning coffee to
              evening celebrations.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              We work with artisan jewelers who share our commitment to quality and
              sustainability, ensuring each piece meets the highest standards — without
              the traditional markup.
            </p>
            <Link
              to="/about"
              className="inline-block border border-champagne text-champagne px-10 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-champagne hover:text-white transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
