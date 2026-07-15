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
    <section ref={containerRef} className="py-16 lg:py-24 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-8e2c4a"
              data-strk-img="[brand-story-text] [brand-story-title] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2 className="text-xs tracking-section uppercase font-semibold text-gold mb-3">Our Story</h2>
            <h3
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-base mb-6"
            >
              Where Craft Meets Heart
            </h3>
            <p
              id="brand-story-text"
              className="text-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: luxury shouldn't be exclusive. Every piece in our collection is crafted with the same care and attention as fine jewelry, using 18K gold plating over premium brass to create pieces that look and feel extraordinary — without the extraordinary price tag.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              From our studio to your jewelry box, each design is thoughtfully created to be worn, loved, and treasured every single day.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wide uppercase font-medium text-gold hover:text-gold-dark transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
