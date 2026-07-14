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
    <section ref={containerRef} className="section-padding bg-cream-50">
      <div className="container-wide mb-8">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">As Seen On You</h2>
        <div className="w-12 h-px bg-gold mt-4" />
      </div>

      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm tracking-wide"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
