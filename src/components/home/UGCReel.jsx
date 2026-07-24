import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'
import { useFadeIn } from '@/lib/useFadeIn'

const UGCReel = () => {
  const containerRef = useRef(null)
  const { ref: fadeRef, visible } = useFadeIn(0.1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-velmora-dark">
      <div ref={fadeRef} className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-velmora-warmWhite">As Seen On You</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {ugcItems.map(item => (
            <div key={item.id} className="flex-shrink-0 w-[200px] md:w-[240px] relative group">
              <div className="aspect-[9/16] overflow-hidden rounded-lg">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-velmora-dark/80 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-velmora-warmWhite tracking-[0.05em]">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
