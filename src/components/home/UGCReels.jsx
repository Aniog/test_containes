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
    <section ref={containerRef} className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-cream text-center">
          As Seen On You
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-44 md:w-52 flex-shrink-0 group">
              <div className="aspect-[9/16] overflow-hidden bg-stone-800">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] gold jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-cream/90 italic">
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
