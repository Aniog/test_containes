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
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-h3k7"
              data-strk-img="[brand-story-text] [brand-story-heading]"
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
              className="font-serif text-2xl md:text-4xl tracking-wide text-text-primary"
            >
              The Art of Quiet Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-text-secondary font-light leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece
              with the same care and intention as the world's top maisons — using 18K gold plating
              over premium brass, hand-set stones, and hypoallergenic materials.
            </p>
            <p className="font-sans text-sm md:text-base text-text-secondary font-light leading-relaxed mb-8">
              Every design begins with a sketch, evolves through iteration, and arrives at your door
              in packaging as considered as the jewelry itself. No middlemen. No markups. Just
              beautifully made pieces at honest prices.
            </p>
            <Link
              to="/about"
              className="font-sans text-xs tracking-super-wide uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-warm-black transition-colors duration-300 inline-block"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
