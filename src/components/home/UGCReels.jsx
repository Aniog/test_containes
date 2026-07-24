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
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-velmora-textPrimary tracking-[0.05em]">
            As Seen On You
          </h2>
          <p id="ugc-subtitle" className="font-sans text-sm text-velmora-textSecondary mt-3 tracking-[0.03em]">
            Real style, real moments
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="ugc-scroll overflow-x-auto pb-4">
        <div className="flex gap-4 px-4 md:px-8 w-max">
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-[200px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] [ugc-subtitle] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-white/90 tracking-[0.05em]">
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
