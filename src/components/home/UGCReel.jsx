import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-container mx-auto px-5 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-800 tracking-wide text-center">As Seen On You</h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-4">
        <div className="flex gap-4 px-5 md:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-44 md:w-52 flex-shrink-0">
              <div className="aspect-[9/16] bg-stone-100 overflow-hidden rounded-sm">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.captionId}] velmora jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p id={item.captionId} className="font-serif text-sm text-warm-white italic">
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
