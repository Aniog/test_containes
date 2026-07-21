import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

const UGCRow = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-8 mb-10">
        <h2 className="font-sans text-xs font-semibold tracking-section uppercase text-muted mb-3">
          As Seen On You
        </h2>
        <p className="font-serif text-3xl md:text-4xl font-medium text-base">Styled by Our Community</p>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9x16] rounded-lg overflow-hidden flex-shrink-0 group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}] jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream/90 italic"
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

export default UGCRow
