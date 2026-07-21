import React, { useEffect, useRef } from 'react'
import { ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const UGCRow = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-10">
        <h2 className="font-serif text-display-sm md:text-display text-brand-charcoal text-center">
          As Seen On You
        </h2>
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-4">
        <div className="flex gap-4 px-4 md:px-6 lg:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-48 md:w-56 flex-shrink-0 group">
              <div className="aspect-[9/16] overflow-hidden bg-brand-sand rounded-sm">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] gold jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-white italic">
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

export default UGCRow
