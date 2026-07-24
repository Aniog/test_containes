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
    <section ref={containerRef} className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-warm-light overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-7f8g9h"
              data-strk-img="[brand-story-heading] [brand-story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal font-light"
            >
              Crafted with<br />Intention
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-sm text-taupe leading-relaxed"
            >
              Velmora was born from a belief that fine jewelry shouldn't be reserved for special occasions. 
              Every piece is designed to be worn daily — to accompany you through life's quiet moments and 
              its grand celebrations alike.
            </p>
            <p className="mt-4 text-sm text-taupe leading-relaxed">
              Using 18K gold plating and ethically sourced materials, we create jewelry that feels as good 
              as it looks. No compromise on quality. No markups for status.
            </p>
            <Link
              to="/"
              className="inline-block mt-8 text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5 hover:text-gold-hover hover:border-gold-hover transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}