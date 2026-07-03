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
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-velmora-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-1a2b"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 lg:py-8">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light tracking-wide uppercase text-velmora-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-velmora-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: luxury shouldn't be exclusive. We craft demi-fine jewelry with the same care and attention as the finest houses — 18K gold plating, ethically sourced materials, and designs that transcend seasons.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-warm-gray leading-relaxed mb-8">
              Every piece is designed in our studio and crafted by artisans who share our obsession with detail. The result? Jewelry that looks and feels extraordinary — at a price that lets you build a collection, not just own a single piece.
            </p>
            <Link
              to="/about"
              className="inline-block font-sans text-xs font-semibold tracking-ultra-wide uppercase border border-velmora-gold text-velmora-gold px-8 py-3 hover:bg-velmora-gold hover:text-velmora-charcoal transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
