import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const UGCReel = () => {
  const containerRef = useRef(null)
  const [sectionRef, revealed] = useScrollReveal(containerRef)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-velmora-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 reveal ${revealed ? 'revealed' : ''}`}>
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal tracking-wide">As Seen On You</h2>
          <div className={`w-12 h-px bg-velmora-gold mx-auto mt-4 ${revealed ? 'line-expand' : ''}`} />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 px-4 sm:px-8 lg:px-16" style={{ width: 'max-content' }}>
          {ugcItems.map((item, i) => (
            <div
              key={item.id}
              className={`relative w-40 sm:w-48 flex-shrink-0 aspect-[9/16] overflow-hidden group reveal reveal-delay-${Math.min(i + 1, 5)} ${revealed ? 'revealed' : ''}`}
            >
              <img
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}] jewelry worn ear neck gold`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-3 left-3 right-3 font-serif text-sm text-white/90 italic"
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

export default UGCReel
