import React, { useEffect, useRef } from 'react'
import { ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal text-center mb-3">
          As Seen On You
        </h2>
        <p className="font-sans text-sm text-stone-500 text-center mb-10">
          Real style, real moments — share yours with #VelmoraJewelry
        </p>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-5 md:px-8 pb-2" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden group">
              <img
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] gold jewelry worn editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream font-medium italic"
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
