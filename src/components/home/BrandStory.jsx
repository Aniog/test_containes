import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const BrandStory = () => {
  const containerRef = useRef(null)
  const [sectionRef, isVisible] = useScrollAnimation()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div ref={containerRef} className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className={`aspect-[4x5] overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <img
              data-strk-img-id="brand-story-img-5e7f8a"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className={`md:pl-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-semibold text-charcoal tracking-tight"
            >
              The Art of Everyday Gold
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-base text-stone-600 leading-relaxed mb-4"
            >
              At Velmora, we believe luxury should be lived in — not locked away. Each piece is crafted with 18K gold plating over premium brass, designed to be worn every day and treasured for years.
            </p>
            <p className="font-sans text-base text-stone-600 leading-relaxed mb-8">
              From our studio to your jewelry box, every detail is considered: the weight of a huggie, the drape of a chain, the warmth of the gold. This is jewelry that moves with you.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold font-sans text-xs font-medium tracking-btn uppercase px-10 py-3 hover:bg-gold hover:text-white transition-all duration-300"
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
