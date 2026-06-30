import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-ivory">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
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
              className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-light leading-tight"
            >
              Where Artistry Meets Everyday Elegance
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-stone-500 leading-relaxed mb-4"
            >
              Born from a belief that luxury should be lived in, not locked away. Each piece in our collection is crafted with 18K gold plating over sterling silver — designed to catch the light and turn heads, without the heirloom price tag.
            </p>
            <p className="font-sans text-sm md:text-base text-stone-500 leading-relaxed mb-8">
              From our studio to your jewelry box, every detail is considered. Because you deserve pieces that feel as special as the moments you wear them for.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider-custom text-gold font-semibold hover:text-gold-hover transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
