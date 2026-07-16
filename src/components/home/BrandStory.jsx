import React from 'react'
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
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b8d2f1"
              data-strk-img="artisan jewelry making, gold jewelry craftsmanship, warm studio lighting, editorial photography"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-cream-300/40 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-gold-600 text-xs tracking-wide-xl uppercase font-medium mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-6 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <div className="w-12 h-px bg-gold-400 mb-6" />
            <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves to feel extraordinary, 
              every day. Our demi-fine jewelry combines the elegance of fine jewelry with 
              accessibility, using 18K gold plating over quality base metals.
            </p>
            <p className="text-charcoal-500 text-sm leading-relaxed mb-8">
              Each piece is designed to be worn, loved, and treasured. From our studio to your 
              jewelry box, we pour care into every detail — because the pieces you wear should 
              be as unique as the story you live.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs tracking-nav uppercase font-medium text-charcoal-800 border-b border-charcoal-800 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors duration-300"
            >
              Discover the Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
