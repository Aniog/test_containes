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
    <section ref={containerRef} className="py-16 md:py-24 bg-antique-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2
          id="ugc-title"
          className="font-serif text-3xl md:text-4xl text-deep-charcoal tracking-wide text-center"
        >
          As Seen On You
        </h2>
        <p className="mt-3 font-sans text-sm text-warm-gray-500 tracking-wide text-center">
          Real style, real moments — share yours with #VelmoraJewelry
        </p>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative flex-shrink-0 w-48 md:w-56 aspect-[9x16] overflow-hidden group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}-caption] [ugc-title] gold jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-transparent" />
              <p
                id={`${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm md:text-base text-warm-cream italic"
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
