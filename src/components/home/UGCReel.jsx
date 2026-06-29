import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@/lib/image-helper'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
          <p className="text-sm text-muted mt-3">Tag @velmora to be featured</p>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-2" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] velmora jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={item.captionId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream/90 tracking-wide"
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
