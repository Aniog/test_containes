import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const BrandStory = () => {
  const containerRef = useRef(null)
  const [revealRef, isVisible] = useScrollReveal(containerRef)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className={`aspect-[4/5] overflow-hidden reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
            <img
              data-strk-img-id="brand-story-img-j1k2l3"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className={`py-4 md:py-8 reveal-hidden ${isVisible ? 'reveal-visible' : ''} reveal-delay-2`}>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-light tracking-wide text-warm-black"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-stone leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry shouldn't be reserved for special occasions. Every piece in our collection is designed to be worn, loved, and lived in — crafted with the same care and attention as heirloom jewelry, at a price that makes everyday luxury possible.
            </p>
            <p className="text-sm md:text-base text-stone leading-relaxed mb-8">
              Each design begins with a sketch and ends with a piece that feels like it was made just for you. We use 18K gold plating over hypoallergenic sterling silver, because beauty should never come at the cost of comfort.
            </p>
            <Link
              to="/about"
              className="inline-block border border-warm-black text-warm-black px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-warm-black hover:text-warm-white transition-all duration-300"
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
