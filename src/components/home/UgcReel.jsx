import React, { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

const UgcReel = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-charcoal text-center">
          As Seen On You
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 md:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90 italic"
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

export default UgcReel
