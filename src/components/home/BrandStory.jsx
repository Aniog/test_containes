import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4x5] md:aspect-[3x4] overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-q1r2s3"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-espresso"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-warm-500 leading-relaxed text-base md:text-lg"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and attention as the world's top maisons. Our 18K gold-plated designs are hypoallergenic, tarnish-resistant, and made to be worn every day — because true luxury is lived in.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-gold text-gold hover:bg-gold hover:text-white font-sans text-xs tracking-product uppercase px-8 py-3 transition-colors duration-200"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
