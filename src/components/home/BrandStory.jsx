import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      {/* Image */}
      <div className="aspect-[4/5] md:aspect-auto bg-soft-sand overflow-hidden">
        <img
          data-strk-img-id="brand-story-img"
          data-strk-img="[brand-story-title] fine jewelry craftsmanship"
          data-strk-img-ratio="4x5"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora craftsmanship"
          className="w-full h-full object-cover"
        />
        <span id="brand-story-title" className="hidden">Velmora Fine Jewelry Craftsmanship</span>
      </div>

      {/* Text */}
      <div className="flex items-center bg-espresso text-warm-white px-8 md:px-14 lg:px-20 py-16 md:py-0">
        <div className="max-w-[420px]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold-light mb-6">Our Story</p>
          <h2 className="font-serif text-[28px] md:text-[34px] tracking-[0.03em] leading-[1.25]">
            Jewelry That Lives With You
          </h2>
          <div className="w-[40px] h-[1px] bg-gold mt-6 mb-6" />
          <p className="text-taupe leading-relaxed text-sm">
            Velmora was born from a belief that fine jewelry shouldn't be locked away for special
            occasions. Every piece is crafted with 18K gold plating, designed to move through life
            with the modern woman — from morning coffee to evening celebrations.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 text-sm tracking-[0.12em] uppercase text-gold hover:text-gold-light underline underline-offset-8 decoration-1"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
