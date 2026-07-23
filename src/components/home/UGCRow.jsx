import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-gold text-xs tracking-widest uppercase font-sans mb-3">As Seen On</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]" id="ugc-title">
            #VelmoraMoments
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] bg-[#E5DDD3] overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`UGC ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-serif text-white text-sm italic" id={`ugc-caption-${item.id}`}>
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