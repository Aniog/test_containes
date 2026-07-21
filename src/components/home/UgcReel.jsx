import React, { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'gold jewelry ear closeup warm light' },
  { id: 'ugc-2', caption: 'Stacked & styled', query: 'layered gold necklaces model neck' },
  { id: 'ugc-3', caption: 'Everyday elegance', query: 'gold huggie earrings woman portrait' },
  { id: 'ugc-4', caption: 'Gift-worthy moments', query: 'jewelry gift box elegant packaging' },
  { id: 'ugc-5', caption: 'The perfect pair', query: 'gold drop earrings closeup dark background' },
  { id: 'ugc-6', caption: 'Sun-kissed details', query: 'gold jewelry sunlight model closeup' },
  { id: 'ugc-7', caption: 'Quiet luxury', query: 'minimal gold jewelry editorial flat lay' },
  { id: 'ugc-8', caption: 'Made to layer', query: 'stacked gold rings and necklaces styling' },
]

export default function UgcReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-charcoal tracking-wide text-center">
          Styled by You
        </h2>
        <p className="mt-2 text-sm text-velmora-stone text-center">
          Tag @velmora to be featured.
        </p>
      </div>

      <div className="overflow-x-auto hide-scrollbar px-4">
        <div className="flex gap-3 md:gap-4 w-max pb-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 md:w-48 flex-shrink-0 overflow-hidden rounded-lg group"
            >
              <div className="aspect-[9/16] bg-velmora-ivory relative">
                <img
                  data-strk-img-id={item.id}
                  data-strk-img={`[ugc-title] [${item.id}-caption]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p
                  id={`${item.id}-caption`}
                  className="absolute bottom-3 left-3 right-3 font-serif text-sm md:text-base text-white/90 italic leading-snug"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span id="ugc-title" className="sr-only">Velmora jewelry styled by customers</span>
    </section>
  )
}
