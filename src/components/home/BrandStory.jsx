import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k1l2m3"
              data-strk-img="[brand-story-text] [brand-story-title] velmora jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-stone-800 tracking-wide"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-stone-600 leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and attention reserved for haute joaillerie. Our 18K gold plated designs are hypoallergenic, tarnish-resistant, and made to move with you — from morning coffee to evening cocktails.
            </p>
            <p className="text-sm md:text-base text-stone-600 leading-relaxed mb-8">
              Every curve, every clasp, every finish is considered. Because you deserve jewelry that's as intentional as you are.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold px-8 py-3 text-xs uppercase tracking-btn font-semibold hover:bg-gold hover:text-warm-white transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
