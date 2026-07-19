import React, { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', label: 'The perfect everyday hoop', handle: '@sophia_style' },
  { id: 'ugc-2', label: 'Obsessed with this cuff', handle: '@jewelrydiaries' },
  { id: 'ugc-3', label: 'Gift wrapped with love', handle: '@giftguide' },
  { id: 'ugc-4', label: 'Stacking my Velmora pieces', handle: '@minimalist_jewels' },
  { id: 'ugc-5', label: 'Necklace of the summer', handle: '@fashioneditor' },
  { id: 'ugc-6', label: 'Gold on gold on gold', handle: '@luxelayers' },
]

export default function UGCRow() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark font-light">As Seen On You</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-taupe text-sm mt-3">Tag @velmorajewelry to be featured</p>
        </div>
      </div>

      <h2 id="ugc-section-title" className="sr-only">As Seen On You</h2>

      <div className="overflow-x-auto pb-4 ugc-scroll">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden bg-taupe-sand/20 group cursor-pointer">
              <img
                data-strk-img-id={`ugc-img-${item.id}`}
                data-strk-img={`[ugc-label-${item.id}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-label-${item.id}`} className="text-white text-xs font-serif italic leading-tight">
                  {item.label}
                </p>
                <p className="text-white/60 text-[10px] mt-1">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}