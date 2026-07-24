import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-cream overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-t1u2v3"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="text-xs uppercase tracking-extra-wide text-gold mb-4">Our Story</p>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal leading-snug">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p id="brand-story-text" className="mt-6 text-muted-fg leading-relaxed">
              Born from a love of understated luxury, Velmora creates demi-fine jewelry that bridges the gap between costume and fine. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic bases, and finished by hand.
            </p>
            <p className="mt-4 text-muted-fg leading-relaxed">
              We believe beautiful jewelry shouldn't require a special occasion. Our pieces are made to be worn every day, layered with intention, and treasured for years to come.
            </p>
            <button className="mt-8 border border-gold text-gold px-8 py-3 uppercase tracking-extra-wide text-sm hover:bg-gold hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
