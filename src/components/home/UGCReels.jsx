import React, { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

const UGCReels = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-linen">
      <div className="max-w-content mx-auto px-5 md:px-8 mb-8 md:mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-2">As Seen On You</h2>
        <div className="w-12 h-px bg-gold mx-auto" />
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-5 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-44 md:w-52 flex-shrink-0">
              <div className="aspect-[9x16] overflow-hidden bg-sand">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-3 pt-8">
                <p id={item.titleId} className="font-serif text-sm text-white italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReels
