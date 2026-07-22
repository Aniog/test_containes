import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-linen">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-2q3r4s"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-4"
            >
              Our Story
            </h2>
            <p
              id="brand-story-subtitle"
              className="font-sans text-sm text-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautifully crafted jewelry should be accessible, not exclusive. Every piece in our collection is designed in-house and finished with 18K gold, creating demi-fine jewelry that stands the test of time — without the luxury markup.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-6">
              From our studio to your jewelry box, each piece passes through the hands of skilled artisans who share our commitment to quality and care. We believe in jewelry that becomes part of your story.
            </p>
            <Link
              to="/about"
              className="inline-block border border-charcoal text-charcoal font-sans text-xs tracking-product uppercase px-8 py-3 hover:bg-charcoal hover:text-white transition-colors duration-300"
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
