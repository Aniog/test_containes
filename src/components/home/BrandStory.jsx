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
    <section ref={containerRef} className="py-16 md:py-24 lg:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-2k9m4n"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2 className="font-sans text-xs font-semibold tracking-section uppercase text-muted mb-3">
              Our Story
            </h2>
            <h3
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-medium text-base mb-6"
            >
              Where Craft Meets Conscious Beauty
            </h3>
            <p
              id="brand-story-text"
              className="font-sans text-sm text-muted leading-relaxed mb-4"
            >
              Born from a belief that luxury shouldn't cost the earth — or your conscience — Velmora creates demi-fine jewelry that bridges the gap between everyday wear and heirloom quality.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over sterling silver, designed in our Paris studio, and made to be worn, gifted, and treasured for years to come.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold font-sans text-xs font-semibold tracking-section uppercase px-8 py-3 hover:bg-gold hover:text-base transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
