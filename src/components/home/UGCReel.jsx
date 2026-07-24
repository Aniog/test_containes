import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 section-padding">
          <p className="caption text-gold mb-3 tracking-mega-wide">Styled by You</p>
          <h2 className="heading-lg text-charcoal">Tag #VelmoraStyle</h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Horizontal scroll reel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pb-4"
        >
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] sm:w-[240px] relative group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[9/16] rounded-lg">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover bg-cream-300"
                  data-strk-img-id={item.id}
                  data-strk-img={`${item.imgQuery} jewelry styling instagram`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-serif text-lg text-cream-100 italic">
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
