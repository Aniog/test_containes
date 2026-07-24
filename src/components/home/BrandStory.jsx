import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3x4] overflow-hidden bg-velmora-dark">
            <img
              data-strk-img-id="brand-story-img-1a2b"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide"
            >
              The Art of Everyday Gold
            </h2>
            <div className="mt-3 w-12 h-px bg-velmora-gold" />
            <p
              id="brand-story-desc"
              className="mt-6 font-sans text-base md:text-lg text-stone-600 leading-relaxed"
            >
              At Velmora, we believe fine jewelry shouldn't be reserved for special occasions. Each piece is crafted with 18K gold plating over durable brass, designed to be worn, loved, and lived in — from morning coffee to evening cocktails.
            </p>
            <p className="mt-4 font-sans text-base text-stone-600 leading-relaxed">
              Our artisans blend traditional goldsmithing techniques with modern design sensibility, creating pieces that feel both timeless and fresh. Every detail — from the clasp to the finish — is considered with care.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block font-sans text-sm tracking-[0.1em] uppercase text-velmora-gold hover:text-velmora-gold-light transition-colors duration-300 border-b border-velmora-gold hover:border-velmora-gold-light pb-1"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
