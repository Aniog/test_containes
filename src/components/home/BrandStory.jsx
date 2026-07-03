import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-d3e4"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-stone-600 leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. 
              Every piece in our collection is designed to be worn, loved, and lived in — crafted with the same 
              attention to detail as heirloom jewelry, at a price that makes everyday luxury possible.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-8">
              Each design begins with a sketch and ends with a piece that feels like it was made just for you. 
              18K gold plated, hypoallergenic, and built to last — because the best jewelry is the kind you never take off.
            </p>
            <Link to="/about" className="btn-secondary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
