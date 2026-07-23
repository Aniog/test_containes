import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-g8h9i0"
              data-strk-img="[story-heading] [story-text] artisan crafting gold jewelry warm lighting editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="section-subheading mb-4">Our Story</p>
            <h2 id="story-heading" className="section-heading mb-6">
              Jewelry That Tells Your Story
            </h2>
            <p id="story-text" className="font-sans text-base text-stone-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is, without the luxury markup. We design demi-fine pieces in 18K gold that are made to be worn, loved, and treasured.
            </p>
            <p className="font-sans text-base text-stone-600 leading-relaxed mb-8">
              Each piece is crafted with care using hypoallergenic materials, so you never have to choose between beauty and comfort. From our studio to your jewelry box — this is quiet luxury, made accessible.
            </p>
            <Link
              to="/about"
              className="btn-outline inline-block w-fit"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
