import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

export default function BrandStory() {
  const containerRef = useRef(null)
  const [sectionRef, isVisible] = useScrollAnimation()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-cream">
      <div className="container-wide" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className={`relative aspect-[4x5] overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className={`py-4 md:py-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-warm-black font-light"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-warm-tan leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry shouldn't be reserved for special occasions, Velmora creates demi-fine pieces that move with you — from morning coffee to evening cocktails.
            </p>
            <p className="text-sm md:text-base text-warm-tan leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over brass, designed in our Paris studio, and made to be worn every day. Because the best jewelry is the kind you never take off.
            </p>
            <Link
              to="/about"
              className="btn-secondary inline-block"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
