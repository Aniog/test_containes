import { useEffect, useRef } from 'react'
import { ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide">As Seen On You</h2>
          <div className="mt-3 w-12 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:-mx-8 md:px-8">
          {ugcItems.map(item => (
            <div key={item.id} className="flex-shrink-0 w-[200px] md:w-[240px]">
              <div className="relative aspect-[9x16] overflow-hidden bg-velmora-dark group">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-velmora-dark/70 to-transparent p-4">
                  <p id={item.titleId} className="font-serif text-sm text-velmora-light tracking-wide leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
