import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function BrandStory() {
  const containerRef = useRef(null)
  const [revealRef, revealed] = useScrollReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div
            className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm transition-all duration-1000"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateX(0)' : 'translateX(-30px)',
            }}
          >
            <img
              data-strk-img-id="brand-story-img-m1n2o3"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div
            className="md:pl-8 transition-all duration-1000 delay-200"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateX(0)' : 'translateX(30px)',
            }}
          >
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-medium text-stone-900 tracking-wide"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-stone-600 leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: luxury shouldn't be exclusive. We craft demi-fine jewelry
              in 18K gold plate, designed for the women who appreciate quiet elegance — pieces that transition
              effortlessly from morning coffee to evening cocktails.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Every piece is hypoallergenic, ethically sourced, and made to be worn every day. Because the best
              jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-stone-900 text-stone-900 text-xs tracking-ultra-wide uppercase font-medium hover:bg-stone-900 hover:text-cream transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
