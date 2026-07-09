import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[var(--velmora-bg-alt)]">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-subtitle]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8 lg:pl-12">
            <h2
              id="brand-story-title"
              className="serif-heading text-3xl md:text-4xl lg:text-5xl tracking-[0.05em] mb-6"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-[var(--velmora-gold)] mb-6" />
            <p
              id="brand-story-subtitle"
              className="text-[var(--velmora-text-secondary)] leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury price tag. We create demi-fine pieces that bridge the gap between everyday wear and special occasion — jewelry you can live in, love, and treasure.
            </p>
            <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over a solid brass base, designed to be hypoallergenic and built to last. We source responsibly, design thoughtfully, and deliver directly to you — cutting out the middleman so you get exceptional quality at an honest price.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
