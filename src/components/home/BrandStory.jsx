import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const BrandStory = () => {
  const containerRef = useRef(null)
  const [revealRef, revealed] = useScrollReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={revealRef} className={`py-16 md:py-24 bg-ivory transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div ref={containerRef} className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-7g8h"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal"
            >
              The Art of Quiet Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-charcoal/60 font-sans text-sm leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and attention as the world's top maisons. Our 18K gold plated designs are hypoallergenic, water-resistant, and made to be worn — not saved for special occasions.
            </p>
            <p className="text-charcoal/60 font-sans text-sm leading-relaxed mb-8">
              Every piece begins with a sketch, is refined by hand, and finished with precision. From our studio to your jewelry box, we honor the tradition of craftsmanship while designing for the way you live today.
            </p>
            <Link
              to="/about"
              className="inline-block px-10 py-3 border border-charcoal text-charcoal text-xs tracking-product font-sans font-medium hover:bg-charcoal hover:text-cream transition-colors duration-200"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
