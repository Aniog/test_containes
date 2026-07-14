import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">As Seen On You</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
          <p className="mt-3 text-sm text-stone-500 font-sans">Tag @velmora to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-6 md:px-8 lg:px-12 pb-2" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-40 md:w-48 flex-shrink-0 aspect-[9/16] rounded-sm overflow-hidden group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent pt-12 pb-4 px-3">
                <p id={item.captionId} className="font-serif text-sm text-cream italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
