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
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-brand-sand">
            <img
              data-strk-img-id="brand-story-img-4k7m"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-display-sm md:text-display text-brand-charcoal mb-6"
            >
              Where Craft Meets Heart
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-brand-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine-quality jewelry shouldn't come with a fine-art price tag. Every piece is designed in-house, crafted with 18K gold plating over sterling silver, and made to be worn — not saved for special occasions.
            </p>
            <p className="font-sans text-sm md:text-base text-brand-warm-gray leading-relaxed mb-8">
              We work with artisan workshops that share our commitment to quality and ethical sourcing. The result is jewelry that feels luxurious, looks timeless, and fits effortlessly into your everyday.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-brand-gold text-brand-gold font-sans text-xs uppercase tracking-wide font-semibold pb-1 hover:text-brand-gold-dark hover:border-brand-gold-dark transition-colors duration-300"
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
