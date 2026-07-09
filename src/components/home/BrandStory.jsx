import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm order-2 md:order-1">
          <img
            data-strk-img-id="brand-story-img-j1k2l3"
            data-strk-img="[brand-story-title] [brand-story-text] gold jewelry artisan craft workshop"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora jewelry artisan at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base/10 to-transparent" />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 md:pl-4">
          <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-4">
            Our Story
          </p>
          <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-base font-light leading-tight mb-6">
            Jewelry That Feels Like You
          </h2>
          <p id="brand-story-text" className="font-sans text-sm text-muted leading-relaxed mb-4">
            Velmora was born from a simple belief: fine jewelry should be accessible, 
            not aspirational. We create demi-fine pieces in 18K gold plating that look 
            and feel luxurious — without the luxury price tag.
          </p>
          <p className="font-sans text-sm text-muted leading-relaxed mb-8">
            Every piece is designed in our studio, crafted with care, and made to be 
            worn every day. Because the best jewelry is the kind you never take off.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-widest-xl uppercase text-base border-b border-base pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
          >
            Read Our Story
            <span className="text-sm">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
