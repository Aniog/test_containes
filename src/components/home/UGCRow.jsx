import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const UGCRow = () => {
  const containerRef = useRef(null)
  const [revealRef, revealed] = useScrollReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={revealRef} className={`py-16 md:py-24 bg-ivory transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-content mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal text-center">
          As Seen On You
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 flex-shrink-0 aspect-[9x16] overflow-hidden group"
            >
              <img
                data-strk-img-id={item.imageId}
                data-strk-img={`[ugc-${item.id}-caption] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-4">
                <p
                  id={`ugc-${item.id}-caption`}
                  className="font-serif text-sm text-cream tracking-wide"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p id="ugc-section-title" className="sr-only">Velmora jewelry worn by customers</p>
    </section>
  )
}

export default UGCRow
