import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

const UGCRow = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-content mx-auto px-6 md:px-8 mb-10">
        <h2 className="font-sans text-xs tracking-section uppercase text-cream/40 mb-3">
          As Seen On You
        </h2>
        <p className="font-serif text-3xl md:text-4xl text-cream font-light">
          Real Style, Real People
        </p>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-6 md:px-8 w-max">
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="480"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                <p
                  id={item.titleId}
                  className="font-serif text-sm text-cream/90 italic"
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

export default UGCRow
