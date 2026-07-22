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
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image left */}
          <div className="relative aspect-[3x4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a1"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text right */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-stone-800 tracking-wide"
            >
              Our Story
            </h2>
            <div className="w-16 h-px bg-velmora-gold mt-6 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-base text-stone-600 leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, and it shouldn't compromise on quality. Every piece in our collection is 18K gold plated over sterling silver, hypoallergenic, and designed to be worn every day — not saved for special occasions.
            </p>
            <p className="font-sans text-base text-stone-600 leading-relaxed mt-4">
              We work with skilled artisans who share our obsession with detail. From the weight of a huggie to the clasp of a necklace, every element is considered, tested, and refined until it feels just right.
            </p>
            <Link
              to="/about"
              className="btn-outline inline-block mt-8"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
