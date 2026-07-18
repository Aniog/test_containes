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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-warm">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-brand-sand">
            <img
              data-strk-img-id="brand-story-img-d1e2f3"
              data-strk-img="[brand-story-text] [brand-story-heading] velmora jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 lg:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-heading md:text-4xl text-brand-charcoal font-light"
            >
              The Art of Everyday Elegance
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-brand-muted leading-relaxed mb-4"
            >
              Born from the belief that luxury should be lived in, not locked away. Each Velmora piece is crafted with 18K gold plating over hypoallergenic brass — designed to move with you, age gracefully, and become part of your story.
            </p>
            <p className="font-sans text-sm text-brand-muted leading-relaxed mb-8">
              From our studio to your jewelry box, we skip the middlemen and pass the savings to you — without compromising on craft.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
