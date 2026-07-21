import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-k9m2p4"
              data-strk-img="[story-title] [story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <span className="text-xs tracking-[0.25em] uppercase text-velmora-gold font-medium">
              Our Story
            </span>
            <h2
              id="story-title"
              className="mt-4 font-serif text-3xl md:text-4xl font-light text-velmora-charcoal leading-snug"
            >
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-velmora-gold mt-5 mb-6" />
            <p id="story-text" className="text-sm md:text-base text-velmora-graphite leading-relaxed mb-4">
              Velmora was born from a simple belief: fine jewelry should be accessible,
              not exclusive. We craft demi-fine pieces in 18K gold plate that look and feel
              luxurious — without the luxury markup.
            </p>
            <p className="text-sm md:text-base text-velmora-graphite leading-relaxed mb-8">
              Every piece is designed in our studio, ethically produced, and tested for
              hypoallergenic comfort. Because we believe jewelry should enhance your life,
              not complicate it.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs tracking-[0.2em] uppercase text-velmora-charcoal font-medium border-b border-velmora-gold pb-0.5 hover:text-velmora-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
