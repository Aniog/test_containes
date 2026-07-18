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
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-extra-wide uppercase text-center">
          As Seen On You
        </h2>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-5 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9x16] rounded-lg overflow-hidden flex-shrink-0 group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] jewelry worn ear neck`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white tracking-wide"
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
