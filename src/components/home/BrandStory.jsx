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
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-9e2c4a"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal tracking-wide"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-brand-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry shouldn't be reserved for special occasions. 
              Our demi-fine pieces are crafted with 18K gold plating over sterling silver, designed to be worn, 
              loved, and treasured every single day.
            </p>
            <p className="font-sans text-sm md:text-base text-brand-warm-gray leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio, drawing inspiration from the quiet beauty of 
              everyday moments — the way light catches a gold hoop at sunset, the gentle weight of a pendant 
              against your collarbone.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-charcoal text-brand-charcoal font-sans text-xs uppercase tracking-extra-wide px-8 py-3.5 hover:bg-brand-charcoal hover:text-white transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
