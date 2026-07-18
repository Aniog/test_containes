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
    <section ref={containerRef} className="py-20 md:py-28 border-t border-brand-sand/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a1b2"
              data-strk-img="[brand-story-text] [brand-story-title] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-extra-wide uppercase"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base font-sans text-brand-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry shouldn't cost a fortune. Each piece is crafted with care — 18K gold plated over sterling silver, designed to be worn every day and treasured for years.
            </p>
            <p className="text-sm md:text-base font-sans text-brand-warm-gray leading-relaxed mb-8">
              From our studio to your doorstep, we skip the middlemen and pass the savings to you. No markups, no compromises — just beautifully made jewelry at an honest price.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-gold text-brand-gold text-xs font-sans font-medium tracking-extra-wide uppercase px-10 py-3 hover:bg-brand-gold hover:text-white transition-all duration-300"
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
