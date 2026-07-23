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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-title" className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velmora-charcoal">
              Our Story
            </h2>
            <p id="brand-story-subtitle" className="font-sans text-sm text-velmora-text-secondary mt-2 mb-6">
              Born from a belief that fine jewelry should be accessible, not exclusive.
            </p>
            <p className="font-sans text-base text-velmora-text-secondary leading-relaxed mb-4">
              Velmora was founded with a simple conviction: every woman deserves jewelry that feels precious without the precious price tag. Our demi-fine pieces are crafted with 18K gold plating over sterling silver, designed to be worn daily and treasured for years.
            </p>
            <p className="font-sans text-base text-velmora-text-secondary leading-relaxed mb-8">
              Each piece is designed in our studio and produced in small batches, ensuring the quality and care that mass production can never replicate. From the first sketch to the final polish, we obsess over every detail.
            </p>
            <Link to="/about" className="accent-button-outline px-8 py-3 text-sm rounded-none inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
