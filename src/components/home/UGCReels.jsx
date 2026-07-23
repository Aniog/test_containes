import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'ugc-reel-1', caption: 'Everyday elegance', query: 'woman wearing gold huggie earrings closeup portrait warm' },
  { id: 'ugc-reel-2', caption: 'Golden hour glow', query: 'gold necklace on woman neck sunlight warm editorial' },
  { id: 'ugc-reel-3', caption: 'Stack & layer', query: 'multiple gold earrings stacked ear closeup jewelry trend' },
  { id: 'ugc-reel-4', caption: 'Gift-worthy', query: 'jewelry gift box gold earrings necklace unboxing elegant' },
  { id: 'ugc-reel-5', caption: 'Date night ready', query: 'woman wearing gold statement earrings evening look warm' },
  { id: 'ugc-reel-6', caption: 'Minimal & chic', query: 'delicate gold jewelry minimalist style flat lay warm tones' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="section-subheading mb-3">Styled by You</p>
          <h2 className="section-heading">@VelmoraJewelry</h2>
        </div>
      </div>

      {/* Horizontal scroll reels */}
      <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
          >
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-cream-200 group cursor-pointer">
              <img
                data-strk-img-id={reel.id}
                data-strk-img={`[ugc-caption-${index}] gold jewelry worn model editorial social media`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${index}`}
                  className="font-serif text-lg md:text-xl text-cream-50 italic leading-tight"
                >
                  {reel.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
