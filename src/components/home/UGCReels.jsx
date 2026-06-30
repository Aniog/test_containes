import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

const UGCReels = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-ivory">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="heading-serif text-3xl md:text-4xl text-charcoal font-light">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] gold jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-cream tracking-wide">
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

export default UGCReels
