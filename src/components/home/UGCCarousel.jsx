import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCCarousel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-3">
          Styled by You
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mb-4" />
        <p className="text-sm text-warm-gray text-center max-w-md mx-auto">
          Tag us @velmora to be featured
        </p>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start group relative overflow-hidden"
            style={{ aspectRatio: '9/16' }}
          >
            <img
              data-strk-img-id={`ugc-${item.id}-${index}`}
              data-strk-img={`[${`ugc-caption-${item.id}`}] gold jewelry worn model editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-cream text-base md:text-lg leading-snug"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
