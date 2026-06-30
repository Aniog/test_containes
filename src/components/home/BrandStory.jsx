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
    <section ref={containerRef} className="py-20 md:py-28 bg-warm-black">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 md:px-8 transition-all duration-700 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-d1e2f3"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-2xl md:text-4xl font-light text-cream tracking-wide"
            >
              The Art of Everyday Elegance
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-8" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-warm-gray font-light leading-relaxed mb-6"
            >
              Born from a belief that luxury should be lived in, not locked away. Each piece in our
              collection is crafted with meticulous attention to detail — 18K gold plating over
              hypoallergenic brass, hand-finished by artisans who understand that true elegance lies
              in restraint.
            </p>
            <p className="text-sm md:text-base text-warm-gray font-light leading-relaxed mb-8">
              We design for the woman who values quality over quantity, who reaches for the same
              treasured pieces day after day. Because the finest jewelry isn't just worn — it's
              lived in.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs tracking-[0.15em] uppercase text-gold border-b border-gold/50 pb-1 hover:border-gold transition-colors duration-300 font-sans"
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
