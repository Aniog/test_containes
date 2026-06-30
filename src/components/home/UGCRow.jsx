import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const UGCRow = () => {
  const containerRef = useRef(null)
  const [sectionRef, revealed] = useScrollReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-black">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 md:px-8 transition-all duration-700 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-4xl font-light text-cream tracking-wide">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className={`overflow-x-auto hide-scrollbar transition-all duration-700 delay-200 ease-out ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 flex-shrink-0 group cursor-pointer"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
                <img
                  alt={item.caption}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.captionId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <p
                  id={item.captionId}
                  className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream/90 italic"
                >
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
