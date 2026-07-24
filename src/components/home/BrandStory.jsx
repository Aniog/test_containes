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
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-v1a2"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-title"
              className="font-serif text-2xl md:text-3xl tracking-heading uppercase text-warm-black"
            >
              Our Story
            </h2>
            <div className="mt-3 w-12 h-px bg-gold" />
            <p
              id="brand-story-text"
              className="mt-6 font-sans text-base text-muted leading-relaxed"
            >
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. Every piece in our collection is crafted with 18K gold plating over sterling silver, designed to be worn daily — from morning coffee to evening dinner — and still look as radiant as the day you first put it on.
            </p>
            <p className="mt-4 font-sans text-base text-muted leading-relaxed">
              We source our materials responsibly, work with artisan jewelers who pour care into every detail, and price our pieces fairly — because beauty should be accessible, not exclusive.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block font-sans text-sm tracking-button uppercase text-gold hover:text-gold-dark border-b border-gold hover:border-gold-dark pb-0.5 transition-colors duration-300"
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
