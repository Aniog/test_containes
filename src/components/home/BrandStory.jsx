import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { safeLoadImages } from '@/lib/imageLoader'
import { useScrollReveal } from '@/hooks/useScrollReveal'


export default function BrandStory() {
  const containerRef = useRef(null)
  const [revealRef, isVisible] = useScrollReveal()

  useEffect(() => {
    if (containerRef.current) {
      return safeLoadImages(containerRef.current)
    }
  }, [])

  return (
    <section ref={revealRef} className="py-20 md:py-28 bg-brand-ivory">
      <div className="max-w-7xl mx-auto section-padding">
        <div ref={containerRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center reveal ${isVisible ? 'revealed' : ''}`}>
          {/* Image */}
          <div className="aspect-[4x5] overflow-hidden bg-brand-sand">
            <img
              data-strk-img-id="brand-story-img-d4e5"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <h2 id="brand-story-title" className="font-serif text-display-sm md:text-display text-brand-charcoal">
              The Art of Quiet Luxury
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-6 mb-6" />
            <p id="brand-story-text" className="text-sm md:text-base text-brand-warm-gray leading-relaxed mb-4">
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and attention as the world's top maisons. Our 18K gold plated designs are hypoallergenic, tarnish-resistant, and made to be worn every day.
            </p>
            <p className="text-sm md:text-base text-brand-warm-gray leading-relaxed mb-8">
              From our studio to your jewelry box — no middlemen, no markups. Just beautifully made pieces at honest prices.
            </p>
            <Link to="/about" className="btn-outline text-xs">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
