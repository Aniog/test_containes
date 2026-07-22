import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">As Seen On You</h2>
          <div className="h-px w-12 bg-gold mx-auto mt-4" />
        </div>

        {/* Horizontal scroll reel */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:-mx-6 md:px-6 scrollbar-thin">
          {ugcItems.map(item => (
            <div key={item.id} className="flex-shrink-0 w-[200px] md:w-[240px]">
              <div className="relative aspect-[9x16] overflow-hidden bg-charcoal/5">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4">
                  <p id={item.titleId} className="font-serif text-sm text-cream/90 italic">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
