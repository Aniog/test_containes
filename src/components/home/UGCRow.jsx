import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Golden hour with Golden Spheres',
    imgId: 'ugc-img-a1b2c3',
  },
  {
    id: 'ugc-2',
    caption: 'Everyday stack — Majestic Flora',
    imgId: 'ugc-img-d4e5f6',
  },
  {
    id: 'ugc-3',
    caption: 'Amber Lace at the wedding',
    imgId: 'ugc-img-g7h8i9',
  },
  {
    id: 'ugc-4',
    caption: 'Vivid Aura, always on',
    imgId: 'ugc-img-j1k2l3',
  },
  {
    id: 'ugc-5',
    caption: 'Royal Heirloom unboxing',
    imgId: 'ugc-img-m4n5o6',
  },
  {
    id: 'ugc-6',
    caption: 'Layered gold everyday',
    imgId: 'ugc-img-p7q8r9',
  },
]

export default function UGCRow() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-warm-white section-padding">
      <div className="container-narrow">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-2 font-light">
          As Seen On You
        </h2>
        <p className="text-espresso/50 text-center text-sm font-sans mb-12">
          Tag <span className="text-gold">@velmorajewelry</span> to be featured
        </p>

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 md:px-0 scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-center"
            >
              <div className="aspect-[9/16] bg-muted-gold rounded-sm overflow-hidden relative group">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[ugc-caption-${item.id}] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-black/60 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-3 left-3 right-3 text-cream font-serif text-sm italic leading-snug"
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