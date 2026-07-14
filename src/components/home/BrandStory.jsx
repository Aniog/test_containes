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
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k4l5m6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide"
            >
              The Art of Quiet Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-stone-600 font-sans leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and intention as the world's top maisons — at a price that invites everyday wear.
            </p>
            <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed mb-8">
              Every design begins with a sketch, is refined through dozens of prototypes, and is finished with 18K gold plating over hypoallergenic brass. The result: jewelry that looks and feels extraordinary, without the extraordinary price tag.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold hover:bg-gold hover:text-cream font-sans text-xs font-semibold tracking-widest uppercase px-8 py-3 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
