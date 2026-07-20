import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const UGCRow = () => {
  const containerRef = useRef(null)
  const [revealRef, isVisible] = useScrollReveal(containerRef)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <div className={`text-center reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-warm-black">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-6 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <img
                data-strk-img-id={`ugc-${item.id}-d4e5f6`}
                data-strk-img={`[ugc-${item.id}-caption]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={`ugc-${item.id}-caption`}
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
