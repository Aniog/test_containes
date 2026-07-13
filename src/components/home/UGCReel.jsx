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
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-2">
          Worn & Loved
        </h2>
        <p className="text-sm text-muted text-center">
          Real women, real moments. Tag @velmora to be featured.
        </p>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-sm overflow-hidden group"
          >
            <img
              data-strk-img-id={`ugc-${item.id}-img`}
              data-strk-img={`[ugc-caption-${item.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
