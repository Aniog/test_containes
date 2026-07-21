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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-7e8f9a"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious
              without the luxury markup. We work directly with artisans, using only the finest materials
              — 18K gold plating over sterling silver, hand-set crystals, and hypoallergenic finishes.
            </p>
            <p className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-8">
              Each piece is designed in our studio and crafted with care, so you can wear it every day
              and pass it down tomorrow.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-gold text-brand-gold font-sans text-xs uppercase tracking-super-wide px-10 py-3.5 hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
