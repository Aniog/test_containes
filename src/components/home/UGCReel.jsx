import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

export default function UGCReel() {
  const containerRef = useRef(null)
  const [sectionRef, isVisible] = useScrollAnimation()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-cream">
      <div className="container-wide">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-3xl md:text-4xl text-warm-black font-light">As Seen On You</h2>
          <p className="text-sm text-warm-tan mt-2">Real style, real customers</p>
        </div>
      </div>
      <div className={`overflow-x-auto pb-4 scrollbar-hide transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex gap-4 px-4 md:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-44 md:w-52 flex-shrink-0 aspect-[9x16] rounded-lg overflow-hidden group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={item.captionId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
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
