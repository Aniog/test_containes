import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-warm-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 lg:py-8">
            <h2
              id="brand-story-title"
              className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-warm-cream"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-warm-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm text-warm-tan leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: luxury shouldn't be exclusive. We craft demi-fine jewelry with the same care and intention as the finest houses — using 18K gold plating, ethically sourced materials, and hypoallergenic bases — at a price that invites you to collect, gift, and wear every day.
            </p>
            <p className="text-sm text-warm-tan leading-relaxed mb-8">
              Each piece is designed in our studio and finished by hand, ensuring the kind of detail and warmth that makes jewelry feel personal. This is quiet luxury — made to be lived in.
            </p>
            <Link
              to="/about"
              className="inline-block border border-warm-gold text-warm-gold px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-warm-gold hover:text-warm-black transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
