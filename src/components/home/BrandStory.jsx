import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] bg-velmora-warm overflow-hidden order-2 lg:order-1">
          <img
            data-strk-img-id="brand-story-image"
            data-strk-img="[brand-story-heading] jewelry artisan workshop gold craft"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora artisan at work"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2 lg:py-8">
          <p className="text-xs tracking-mega-wide uppercase text-velmora-gold font-sans font-medium mb-4">
            Our Story
          </p>
          <h2 id="brand-story-heading" className="font-serif text-3xl sm:text-4xl text-velmora-charcoal mb-6 leading-tight">
            Born from a love of<br />timeless craftsmanship
          </h2>
          <div className="w-12 h-px bg-velmora-gold mb-6" />
          <p className="text-sm text-velmora-stone leading-relaxed mb-4">
            Velmora was founded with a simple belief: that luxury should be felt, not flaunted.
            Every piece in our collection is thoughtfully designed to blend artisanal craftsmanship
            with modern sensibility.
          </p>
          <p className="text-sm text-velmora-stone leading-relaxed mb-8">
            We use only 18K gold plating over recycled sterling silver, ensuring each creation
            is as kind to the planet as it is beautiful on you. Our jewelry is hypoallergenic,
            tarnish-resistant, and made to be worn every single day.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans font-medium text-velmora-charcoal border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
