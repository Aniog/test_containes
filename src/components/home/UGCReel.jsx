import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-super-wide uppercase text-gold-500 mb-3">
            Style Inspiration
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800">
            How They Wear It
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-5" />
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-8 lg:px-16 xl:px-24">
        <div className="flex gap-4 md:gap-5" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item, i) => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 lg:w-56 flex-shrink-0 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* 9:16 card */}
              <div className="relative aspect-[9/16] overflow-hidden bg-stone-100">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn model editorial portrait warm`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-base md:text-lg text-cream-50 italic leading-snug"
                >
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
