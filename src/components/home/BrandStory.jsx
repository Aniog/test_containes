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
    <section ref={containerRef} className="py-16 md:py-24 border-t border-stone-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3x4] overflow-hidden bg-stone-800">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2
              id="brand-story-title"
              className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-stone-50"
            >
              Our Story
            </h2>
            <div className="w-16 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-desc"
              className="text-stone-300 text-sm md:text-base leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, and it shouldn't feel disposable. Every piece in our collection is crafted with 18K gold plating over sterling silver, designed to be worn daily and treasured for years.
            </p>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed mb-8">
              We work with artisan jewelers who share our commitment to quality and sustainability. From the first sketch to the final polish, each piece is made with intention — for you, for everyday, for life.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold font-serif uppercase tracking-widest text-sm px-8 py-3 hover:bg-gold hover:text-stone-900 transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
