import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b8c9d0"
              data-strk-img="[brand-story-heading] [brand-story-text] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-product text-accent font-medium mb-4">Our Story</span>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-primary leading-snug">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p id="brand-story-text" className="mt-6 text-secondary leading-relaxed">
              Born from a love of fine craftsmanship and accessible luxury, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully designed in our studio, 
              hand-finished with 18K gold plating, and made to be worn every day — from morning coffee to evening out.
            </p>
            <p className="mt-4 text-secondary leading-relaxed">
              We believe beautiful jewelry shouldn't require a special occasion. It should be part of your 
              everyday ritual — a quiet confidence you carry with you.
            </p>
            <span className="inline-block mt-8 text-xs uppercase tracking-product text-accent font-medium cursor-pointer hover:text-accent-hover transition-colors duration-300 border-b border-accent pb-1 self-start">
              Read More
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
