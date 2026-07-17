import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-divider">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-a4b5c6"
            data-strk-img="[brand-story-text] [brand-story-heading] artisan crafting gold jewelry workshop"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora artisan crafting jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="py-4">
          <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
            Designed with Intention, Crafted with Care
          </h2>
          <p id="brand-story-text" className="mt-6 font-sans text-base text-muted leading-relaxed">
            Every Velmora piece begins as a sketch in our London studio. We work with skilled artisans
            to bring each design to life using recycled metals and responsibly sourced stones. Our
            commitment to quality means every piece is built to last — and to be passed down.
          </p>
          <p className="mt-4 font-sans text-base text-muted leading-relaxed">
            We believe luxury should be accessible. That's why we sell directly to you — no middlemen,
            no markups. Just beautifully crafted jewelry at honest prices.
          </p>
          <a
            href="#"
            className="inline-block mt-8 font-sans text-sm text-gold uppercase tracking-widest hover:text-gold-light transition-colors no-underline border-b border-gold pb-0.5"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}
