import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@/lib/image-helper'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-e7f8g9"
              data-strk-img="[brand-story-text] velmora jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p id="brand-story-text" className="text-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: that fine jewelry shouldn't be reserved for special occasions. Every piece in our collection is designed to be worn, loved, and treasured — every single day.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Crafted with 18K gold plating over hypoallergenic brass, each design balances the warmth of traditional goldsmithing with the clean lines of modern aesthetics. The result is jewelry that feels both timeless and effortlessly now.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold hover:text-cream transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
