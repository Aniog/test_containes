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
    <section ref={containerRef} className="py-20 md:py-28 bg-warm-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide-15 uppercase text-warm-cream">
            As Seen On You
          </h2>
          <p className="font-sans text-sm text-warm-cream/60 mt-3">Real style, real women, real moments</p>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:-mx-6 md:px-6">
          {ugcItems.map(item => (
            <div key={item.id} className="flex-shrink-0 w-[200px] md:w-[240px] relative group">
              <div className="aspect-[9/16] bg-stone-700 overflow-hidden rounded-sm">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warm-black/70 to-transparent p-3">
                <p id={item.titleId} className="font-serif text-sm text-warm-cream tracking-wide-15">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
