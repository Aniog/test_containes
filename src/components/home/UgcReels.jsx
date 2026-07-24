import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

const UgcCard = ({ item }) => {
  return (
    <div className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden rounded-sm group">
      <img
        alt={item.caption}
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.titleId}] gold jewelry worn real customer`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Caption overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-warm-black/70 to-transparent p-4">
        <p
          id={item.titleId}
          className="font-serif text-sm text-cream/90 italic"
        >
          {item.caption}
        </p>
      </div>
    </div>
  )
}

const UgcReels = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl tracking-heading uppercase text-warm-black">
            As Seen On You
          </h2>
          <p className="font-sans text-sm text-muted mt-2">Real style, real women, real gold.</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scroll-hide px-6 md:px-8">
        <div className="flex gap-4 md:gap-6 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <UgcCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UgcReels
