import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-bg-velmora-2d8e1f"
              data-strk-bg="[story-subtitle] [story-title] artisan crafting gold jewelry workshop warm"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-espresso leading-tight mb-6"
            >
              Jewelry made to be lived in.
            </h2>
            <p
              id="story-subtitle"
              className="text-cocoa text-base leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: fine jewelry shouldn't wait for special
              occasions. We design demi-fine gold pieces meant for everyday — the kind you reach
              for without thinking, that age into something only yours.
            </p>
            <p className="text-cocoa text-base leading-relaxed mb-8">
              Every piece is 18K gold plated over brass, hypoallergenic, and crafted to last far
              beyond the season. No markups for markups' sake — just considered design at an honest
              price.
            </p>
            <Link
              to="/about"
              className="inline-block border border-espresso text-espresso px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-espresso hover:text-cream transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
