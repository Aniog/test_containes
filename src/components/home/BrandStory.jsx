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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d7e8f9"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-brand-stone-800"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-brand-stone-600 leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts demi-fine pieces that blur the line between luxury and everyday wear. Each piece is 18K gold plated over hypoallergenic materials, designed in our studio and worn by women who appreciate quiet elegance.
            </p>
            <p className="text-sm md:text-base text-brand-stone-600 leading-relaxed mb-8">
              We skip the traditional retail markup so you can invest in pieces you'll reach for every day — not just on special occasions.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-gold text-brand-gold text-xs uppercase tracking-btn font-medium px-8 py-3 hover:bg-brand-gold hover:text-white transition-all duration-300"
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
