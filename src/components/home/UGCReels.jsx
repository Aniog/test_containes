import React, { useEffect, useRef } from 'react'
import { ugcReels } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const UGCReels = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warmCream border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-textDark">
            As Seen On You
          </h2>
          <p className="font-sans text-sm text-textMuted mt-3">Real style, real wear — from our community.</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 md:gap-6 px-6 md:px-12 lg:px-20" style={{ width: 'max-content' }}>
          {ugcReels.map(reel => (
            <div key={reel.id} className="relative w-[200px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden group flex-shrink-0">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] jewelry worn style`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/70 via-transparent to-transparent" />
              <p id={reel.titleId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-textLight/90 leading-snug">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReels
