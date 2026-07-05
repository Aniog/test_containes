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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-brand-sand overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-e7f8g9"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base leading-relaxed text-brand-warm-gray font-sans mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry shouldn't be reserved for special occasions. Every piece in our collection is designed to be worn, loved, and lived in — crafted with the same care and attention as heirloom jewelry, at a price that makes luxury accessible.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-brand-warm-gray font-sans mb-8">
              Each design begins with a sketch and ends with a piece that feels like it was made just for you. We use only 18K gold plating over brass and hand-set stones, because details matter — and so does how your jewelry makes you feel.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-brand-charcoal pb-1 text-xs tracking-super-wide uppercase font-sans font-medium text-brand-charcoal hover:text-brand-gold hover:border-brand-gold transition-colors"
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
