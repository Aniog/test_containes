import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday sparkle', imgId: 'ugc-reel-1-a1b2c3', captionId: 'ugc-caption-1' },
  { id: 'ugc-2', caption: 'Stacked & styled', imgId: 'ugc-reel-2-d4e5f6', captionId: 'ugc-caption-2' },
  { id: 'ugc-3', caption: 'Golden hour glow', imgId: 'ugc-reel-3-g7h8i9', captionId: 'ugc-caption-3' },
  { id: 'ugc-4', caption: 'Date night ready', imgId: 'ugc-reel-4-j0k1l2', captionId: 'ugc-caption-4' },
  { id: 'ugc-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-m3n4o5', captionId: 'ugc-caption-5' },
  { id: 'ugc-6', caption: 'Gift of gold', imgId: 'ugc-reel-6-p6q7r8', captionId: 'ugc-caption-6' },
]

const UGCReel = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal text-center">
          Worn by You
        </h2>
        <p className="mt-3 text-sm text-brand-muted font-light text-center">Real moments, real gold</p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-sm overflow-hidden snap-start group"
          >
            <img
              alt={item.caption}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [ugc-section-title] gold jewelry on woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p
              id={item.captionId}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

export default UGCReel
