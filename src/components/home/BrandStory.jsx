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
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-cream border-t border-warm-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3x4] bg-warm-ivory overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-1a2b3c"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-warm-black">
              Our Story
            </h2>
            <p id="brand-story-subtitle" className="font-sans text-sm text-warm-black/60 mt-6 leading-relaxed max-w-md">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, and it shouldn't compromise on quality. Each piece is crafted with 18K gold plating over a hypoallergenic base, designed to be worn every day — not just saved for special occasions.
            </p>
            <p className="font-sans text-sm text-warm-black/60 mt-4 leading-relaxed max-w-md">
              We work with skilled artisans who share our commitment to detail, creating pieces that feel substantial, look luxurious, and stand the test of time.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-gold text-gold font-sans text-sm uppercase tracking-wider px-8 py-3 hover:bg-gold hover:text-warm-black transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
