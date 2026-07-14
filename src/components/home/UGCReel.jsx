import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const UGCReel = () => {
  const containerRef = useRef(null)
  const [sectionRef, isVisible] = useScrollAnimation()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal tracking-tight">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
          <p className="mt-3 text-sm text-stone-500 font-sans">Tag @velmora to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className={`overflow-x-auto scrollbar-hide pb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div ref={containerRef} className="flex gap-4 px-6 md:px-[calc((100vw-1280px)/2+24px)]">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9x16] rounded-lg overflow-hidden group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-sm text-white/90"
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

export default UGCReel
