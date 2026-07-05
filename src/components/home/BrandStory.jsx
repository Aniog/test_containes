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
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded overflow-hidden bg-warm-200">
            <img
              data-strk-img-id="brand-story-img-f1g2h3"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2
              id="brand-story-heading"
              className="font-serif text-2xl md:text-3xl tracking-wide text-warm-900"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-warm-700 text-sm leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and attention as the world's top maisons. Our 18K gold plated designs are hypoallergenic, water-resistant, and made to be worn every day — not saved for special occasions.
            </p>
            <p className="text-warm-700 text-sm leading-relaxed mb-8">
              Every piece begins with a sketch, is refined by hand, and finished with a thick layer of 18K gold. The result is jewelry that looks and feels luxurious, at a price that lets you build a collection you love.
            </p>
            <Link
              to="/about"
              className="inline-block border border-warm-900 text-warm-900 text-xs tracking-btn uppercase font-medium px-8 py-3 rounded hover:bg-warm-900 hover:text-white transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
