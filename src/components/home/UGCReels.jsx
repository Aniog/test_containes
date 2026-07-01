import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface-warm">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-product uppercase">As Seen On You</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-40 md:w-48 flex-shrink-0">
              <div className="aspect-[9/16] bg-stone-200 overflow-hidden rounded-sm">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] gold jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p id={item.titleId} className="font-serif text-sm text-white italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
