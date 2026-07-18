import { useEffect, useRef } from 'react'
import { ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto ugc-scroll pb-4">
        <div className="flex gap-4 px-4 md:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-48 md:w-56 flex-shrink-0 group">
              <div className="aspect-[9/16] overflow-hidden bg-charcoal/10">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] jewelry worn reel`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-white tracking-wide">
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
