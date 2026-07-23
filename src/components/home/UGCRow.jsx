import React, { useEffect, useRef } from 'react'
import { ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-cream border-t border-warm-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="ugc-section-title" className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-warm-black text-center mb-8 md:mb-12">
          As Seen On You
        </h2>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 md:gap-6 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-[200px] md:w-[260px] aspect-[9/16] bg-warm-ivory overflow-hidden rounded-sm group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warm-black/70 to-transparent p-4 md:p-5">
                <p id={item.titleId} className="font-serif text-xs md:text-sm text-warm-cream uppercase tracking-wider">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
