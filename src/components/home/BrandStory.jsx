import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const BrandStory = () => {
  const containerRef = useRef(null)
  const [sectionRef, revealed] = useScrollReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={sectionRef} className={`py-20 md:py-28 bg-white sr-hidden ${revealed ? 'sr-visible' : ''}`}>
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-4e7a8b"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-velmora-muted leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts demi-fine pieces
              that blend artisan quality with modern design. Each piece is 18K gold plated over
              hypoallergenic brass, designed in our studio and worn by women who value quiet elegance.
            </p>
            <p className="text-sm md:text-base text-velmora-muted leading-relaxed mb-8">
              We skip the traditional markups and sell directly to you — so you get premium quality
              at a fair price, without compromise.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs font-medium uppercase tracking-wider text-velmora-charcoal border border-velmora-charcoal px-10 py-3 hover:bg-velmora-charcoal hover:text-white transition-all duration-300 btn-press"
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
