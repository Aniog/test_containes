import React, { useEffect, useRef } from 'react'
import { ugcItems } from '@/lib/data'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const UGCReels = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-light text-3xl md:text-4xl text-foreground">As Seen On You</h2>
          <p className="font-sans text-sm text-muted-foreground mt-3">Real style, real moments</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-[200px] md:w-[240px] aspect-[9x16] bg-dark-gray rounded-sm overflow-hidden flex-shrink-0 group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-foreground/90 italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReels
