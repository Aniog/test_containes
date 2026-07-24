import { useRef, useEffect } from 'react'
import { ugcItems } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function UgcReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-brand-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-14">
        <div className="text-center">
          <p className="text-brand-gold text-xs tracking-widest-2xl uppercase mb-3 font-medium">
            #VelmoraStyle
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
            As Seen On You
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal scrolling reel */}
      <div ref={containerRef} className="relative">
        <div className="flex gap-4 px-4 sm:px-8 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory">
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 sm:w-56 aspect-[9/16] rounded-lg overflow-hidden snap-start group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0"
                data-strk-bg-id={item.imgId}
                data-strk-bg={`[${item.caption.replace(/\s+/g, '-')}-caption] woman wearing gold jewelry ear necklace`}
                data-strk-bg-ratio="9x16"
                data-strk-img-width="400"
              >
                <div className="w-full h-full bg-gradient-to-b from-brand-charcoal/20 via-brand-dark-gray to-brand-black/80" />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-[1]" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-[2]">
                <p
                  id={`${item.caption.replace(/\s+/g, '-')}-caption`}
                  className="font-serif text-sm text-brand-text-light/90 tracking-wider"
                >
                  {item.caption}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[3]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
