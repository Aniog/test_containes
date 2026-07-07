import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-s9t0u1"
              data-strk-img="[brand-story-heading] [brand-story-text] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal leading-snug">
              Where Elegance Meets Intention
            </h2>
            <p id="brand-story-text" className="mt-6 text-sm md:text-base text-brand-muted font-light leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a fortune. Each piece in our collection is thoughtfully designed and meticulously crafted with 18K gold plating over hypoallergenic metals — delivering the warmth and weight of fine jewelry at an accessible price point.
            </p>
            <p className="mt-4 text-sm md:text-base text-brand-muted font-light leading-relaxed">
              We design for the modern woman who values quality, subtlety, and self-expression. Whether you're treating yourself or gifting someone special, every Velmora piece is made to be treasured.
            </p>
            <button className="mt-8 border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs font-medium uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
