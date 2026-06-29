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
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d1e2"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide font-light text-velmora-deep"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-velmora-accent mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-velmora-muted leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and attention as the world's top maisons. Our 18K gold plated designs are hypoallergenic, tarnish-resistant, and made to move with you — from morning coffee to evening cocktails.
            </p>
            <p className="text-sm md:text-base text-velmora-muted leading-relaxed mb-8">
              Every piece is designed in our studio and crafted by artisans who share our passion for precision and beauty. Because luxury isn't about price — it's about intention.
            </p>
            <Link
              to="/about"
              className="inline-block border border-velmora-accent text-velmora-accent px-8 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-velmora-accent hover:text-white transition-all duration-300"
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
