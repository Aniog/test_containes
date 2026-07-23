import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal text-center">
          Worn by You
        </h2>
        <p id="ugc-section-title" className="text-muted text-sm mt-3 font-sans text-center">
          Real moments, real gold
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {ugcItems.map(item => (
          <div key={item.id} className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-ivory overflow-hidden group">
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[ugc-caption-${item.id}] [ugc-section-title] gold jewelry woman wearing`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
            <span
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
            >
              {item.caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
