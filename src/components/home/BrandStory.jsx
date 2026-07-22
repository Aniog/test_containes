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
    <section ref={containerRef} className="bg-cream py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3x4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-4d5e6f"
              data-strk-img="[brand-story-subtitle] [brand-story-title] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal mb-6">
              Our Story
            </h2>
            <p id="brand-story-subtitle" className="font-sans text-sm md:text-base text-text-muted-dark leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, and that everyday elegance is worth investing in. Each piece is crafted with 18K gold plating over sterling silver, designed to be worn and loved — not stored away.
            </p>
            <p className="font-sans text-sm md:text-base text-text-muted-dark leading-relaxed mb-8">
              We work with artisans who understand that the details matter. From the weight of a huggie to the curve of an ear cuff, every element is considered. This is jewelry made for the way you actually live.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold font-sans text-xs tracking-ui uppercase px-8 py-3 hover:bg-gold hover:text-charcoal transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
