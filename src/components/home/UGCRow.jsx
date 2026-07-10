import React, { useEffect, useRef } from 'react'
import { safeLoadImages } from '@/lib/imageLoader'
import { useScrollReveal } from '@/hooks/useScrollReveal'

import { ugcItems } from '@/data/products'

export default function UGCRow() {
  const containerRef = useRef(null)
  const [revealRef, isVisible] = useScrollReveal()

  useEffect(() => {
    if (containerRef.current) {
      return safeLoadImages(containerRef.current)
    }
  }, [])

  return (
    <section ref={revealRef} className="py-20 md:py-28 bg-brand-ivory">
      <div className={`max-w-7xl mx-auto section-padding text-center mb-10 reveal ${isVisible ? 'revealed' : ''}`}>
        <h2 className="font-serif text-display-sm md:text-display text-brand-charcoal">As Seen On You</h2>
        <p className="mt-3 text-sm text-brand-warm-gray">Real style, real women. Tag @velmora to be featured.</p>
        <div className="w-8 h-px bg-brand-gold mx-auto mt-5" />
      </div>

      {/* Horizontal scroll with fade edges */}
      <div className="relative" ref={containerRef}>
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-brand-ivory via-brand-ivory/80 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-brand-ivory via-brand-ivory/80 to-transparent z-10 pointer-events-none" />

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-8 md:px-12 lg:px-16 xl:px-20 pb-4" style={{ width: 'max-content' }}>
            {ugcItems.map(item => (
              <div key={item.id} className="relative w-44 md:w-52 flex-shrink-0 group cursor-pointer">
                <div className="aspect-[9x16] overflow-hidden rounded-sm bg-brand-sand">
                  <img
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.captionId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pb-5 transition-opacity duration-300">
                  <p id={item.captionId} className="font-serif text-sm text-white/90 italic">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
