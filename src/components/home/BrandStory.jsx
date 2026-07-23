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
    <section ref={containerRef} className="py-16 md:py-24 bg-warmCream border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-7e8f9a"
              data-strk-img="[brand-story-subtitle] [brand-story-title] gold jewelry artisan crafting"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-medium text-textDark">
              Our Story
            </h2>
            <p id="brand-story-subtitle" className="font-sans text-sm text-textMuted mt-2 tracking-wide uppercase">
              Where craftsmanship meets intention
            </p>
            <div className="mt-6 space-y-4">
              <p className="font-sans text-base text-textDark leading-relaxed">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require compromise. Every piece in our collection is designed to feel luxurious, wear beautifully, and last — without the luxury markup.
              </p>
              <p className="font-sans text-base text-textDark leading-relaxed">
                We work with skilled artisans who share our commitment to quality, using 18K gold plating over durable bases to create pieces that are hypoallergenic, tarnish-resistant, and made for everyday wear.
              </p>
              <p className="font-sans text-base text-textDark leading-relaxed">
                From the first sketch to the final polish, each piece is crafted with the intention of becoming something you treasure — not just wear.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-sm tracking-[0.1em] uppercase font-medium border border-gold text-gold px-8 py-3 rounded-sm hover:bg-gold hover:text-deepCharcoal transition-all duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
