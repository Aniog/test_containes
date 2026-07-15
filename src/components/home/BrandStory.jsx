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
    <section ref={containerRef} className="section-padding bg-antique-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-w3x4y5"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship artisan"
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
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-deep-charcoal tracking-wide"
            >
              Our Story
            </h2>
            <div className="hairline w-12 my-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-warm-gray-600 leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine-quality jewelry should be accessible, not exclusive. Each piece is crafted with 18K gold plating over sterling silver, designed to transition effortlessly from morning coffee to evening celebrations.
            </p>
            <p className="font-sans text-sm md:text-base text-warm-gray-600 leading-relaxed mb-8">
              We work with artisan jewelers who share our commitment to quality and sustainability, ensuring every detail — from the clasp to the finish — meets the standard we'd want for ourselves.
            </p>
            <Link to="/about" className="btn-secondary inline-block">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
