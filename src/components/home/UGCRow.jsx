import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import { ugcSlides } from '../../data/products'

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-20 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal mb-3">As Seen on You</h2>
        <p className="text-sm text-velmora-stone">
          Tag @velmora to be featured.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 sm:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-[200px] sm:w-[240px] snap-start group"
          >
            <div className="relative aspect-[9/16] bg-velmora-warm overflow-hidden rounded-lg">
              <img
                data-strk-img-id={`ugc-slide-${slide.id}`}
                data-strk-img={`[ugc-caption-${slide.id}] [ugc-product-${slide.id}] gold jewelry worn on ear neck close up model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={slide.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent pt-16 pb-5 px-4">
                <p id={`ugc-caption-${slide.id}`} className="font-serif text-sm italic text-white/90 leading-snug">
                  "{slide.caption}"
                </p>
                <p id={`ugc-product-${slide.id}`} className="text-[10px] text-white/60 uppercase tracking-wider mt-1">
                  {slide.product}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
