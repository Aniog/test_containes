import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcSlides } from '@/lib/data'

const UGCReel = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-charcoal">
      <div className="max-w-container mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide">As Seen On You</h2>
        <div className="w-12 h-px bg-gold mt-4" />
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-4">
        <div className="flex gap-4 px-4 md:px-8" style={{ width: 'max-content' }}>
          {ugcSlides.map((slide) => (
            <div key={slide.id} className="relative w-48 md:w-56 flex-shrink-0 group">
              <div className="aspect-[9x16] overflow-hidden bg-warm-black">
                <img
                  data-strk-img-id={slide.imgId}
                  data-strk-img={`[${slide.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={slide.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warm-black/70 to-transparent p-4">
                <p id={slide.titleId} className="font-serif text-sm text-warm-cream italic">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
