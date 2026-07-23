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
    <section ref={containerRef} className="py-16 md:py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a3b4c5"
              data-strk-img="[brand-story-title] [brand-story-text] jewelry artisan crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal">
              The Art of Quiet Luxury
            </h2>
            <p id="brand-story-text" className="mt-6 text-stone leading-relaxed">
              Every Velmora piece begins as a sketch in our London atelier. We believe jewelry should
              feel as effortless as it looks — designed to move with you, from morning coffee to
              evening out. Our 18K gold plating is applied in three layers for lasting warmth, and
              every crystal is hand-set by artisans who share our obsession with detail.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              We skip the traditional retail markup, bringing you heirloom-quality pieces at a
              fraction of the price. Because luxury should be accessible, not exclusive.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs font-medium tracking-widest uppercase text-gold border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
