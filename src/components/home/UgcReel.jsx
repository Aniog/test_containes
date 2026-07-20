import React, { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const REELS = [
  { id: 'ugc1', caption: 'Everyday gold.', query: 'woman wearing delicate ear cuff close up side profile aesthetic' },
  { id: 'ugc2', caption: 'Layered perfection.', query: 'woman wearing layered gold necklaces editorial lighting' },
  { id: 'ugc3', caption: 'Golden hour.', query: 'chunky gold huggie earrings on model sunlight' },
  { id: 'ugc4', caption: 'Quiet luxury.', query: 'woman neck with gold pendant necklace minimalist' },
  { id: 'ugc5', caption: 'In the details.', query: 'woman hand adjusting gold drop earring' },
  { id: 'ugc6', caption: 'Effortless.', query: 'casual style woman wearing gold hoop earrings' },
]

export function UgcReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 overflow-hidden bg-secondary/30" ref={containerRef}>
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-3xl text-foreground">
          Spotted in Velmora
        </h2>
        <p className="text-muted-foreground mt-2">@velmorajewelry</p>
      </div>
      
      <div className="flex overflow-x-auto gap-4 px-4 pb-8 hide-scrollbar scroll-smooth snap-x">
        {/* Spacer for first element */}
        <div className="w-[10vw] flex-shrink-0 md:hidden" />
        
        {REELS.map((item) => (
          <div 
            key={item.id} 
            className="relative aspect-[9/16] w-64 flex-shrink-0 snap-center rounded-sm overflow-hidden group cursor-pointer"
          >
            <img 
              alt={item.caption}
              data-strk-img-id={`ugc-img-${item.id}`}
              data-strk-img={`${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <p className="font-serif text-lg tracking-wide shadow-black drop-shadow-md">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
        
        {/* Spacer for last element */}
        <div className="w-[10vw] flex-shrink-0 md:hidden" />
      </div>
    </section>
  )
}
