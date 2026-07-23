import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3x4] bg-dark-gray overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-d1e2f3"
              data-strk-img="[brand-story-subtitle] [brand-story-title] jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif font-light text-3xl md:text-4xl text-foreground mb-6">
              Our Story
            </h2>
            <p id="brand-story-subtitle" className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, and it shouldn't compromise on quality. Every piece is 18K gold plated over sterling silver, hypoallergenic, and designed to be worn every day — not saved for special occasions.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
              We work with artisan jewelers who share our obsession with detail. From the weight of a huggie to the clasp of a necklace, every element is considered. Because the jewelry you reach for every morning should feel as good as it looks.
            </p>
            <Link
              to="/about"
              className="font-sans text-xs uppercase tracking-nav text-primary hover:text-muted-gold transition-colors duration-300 border border-primary px-6 py-2 inline-block"
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
