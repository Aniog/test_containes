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
    <section ref={containerRef} className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-8xl mx-auto px-5 md:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-espresso text-center">As Seen On You</h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-4">
        <div className="flex gap-4 px-5 md:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9x16] flex-shrink-0 overflow-hidden group"
            >
              <img
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}] jewelry worn ear neck gold`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90 leading-snug"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
