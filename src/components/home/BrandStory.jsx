import React, { useRef, useEffect } from 'react'
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
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k7l8m9"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship"
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
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry shouldn't require a fine-art budget. Every piece in our collection is crafted with the same care and intention as the luxury houses — 18K gold plating, hypoallergenic materials, and designs that transcend seasons.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              From our studio to your jewelry box, each piece passes through the hands of artisans who believe that the details matter. Because you do.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold text-[11px] tracking-[0.15em] uppercase font-semibold px-10 py-4 hover:bg-gold hover:text-warm-black transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
