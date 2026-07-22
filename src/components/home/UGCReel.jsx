import React, { useEffect, useRef } from 'react'
import { ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const UGCReel = () => {
  const containerRef = useRef(null)
  const { ref: revealRef, revealed } = useScrollReveal(0.1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cardwhite">
      <div ref={revealRef} className={`transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
              As Seen On You
            </h2>
            <p id="ugc-subtitle" className="font-sans text-sm text-muted mt-2 tracking-cta uppercase">
              Real style, real wear
            </p>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 px-4 md:px-6 max-w-content mx-auto" style={{ width: 'max-content' }}>
            {ugcItems.map(item => (
              <div key={item.id} className="relative w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden flex-shrink-0 bg-charcoal group">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] [ugc-subtitle] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <p id={item.titleId} className="font-serif text-sm text-white/90 leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UGCReel
