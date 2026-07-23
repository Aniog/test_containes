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
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-velmora-charcoal tracking-wide">
            As Seen On You
          </h2>
          <p id="ugc-subtitle" className="font-sans text-sm text-velmora-muted mt-3">
            Real style, real moments — share yours with #VelmoraJewelry
          </p>
        </div>
        <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:-mx-0 md:px-0">
          {ugcItems.map(item => (
            <div key={item.id} className="snap-start flex-shrink-0 w-[200px] md:w-[240px] relative group">
              <div className="aspect-[9/16] rounded-sm overflow-hidden bg-velmora-sand">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] [ugc-subtitle] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-velmora-ink/60 to-transparent p-3">
                <p id={item.titleId} className="font-serif text-xs text-white/90 tracking-product">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
