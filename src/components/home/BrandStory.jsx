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
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k7d8"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-subtitle"
              className="text-stone-600 leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry should be accessible, 
              wearable, and made to last. Every piece is crafted with care using 18K gold plating 
              over hypoallergenic materials, designed to move with you from morning coffee to evening out.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              We skip the traditional markups and sell directly to you, so you get premium quality 
              at a fair price. No compromises on materials, no middlemen, no retail markup.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold text-xs tracking-nav uppercase font-semibold px-8 py-3.5 hover:bg-gold hover:text-white transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
