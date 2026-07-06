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
    <section className="py-16 md:py-20 bg-ivory border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-champagne font-medium mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
              #WearVelmora
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-medium text-warm-stone hover:text-champagne transition-colors duration-300"
          >
            Follow on Instagram
          </a>
        </div>

        {/* Horizontal scroll reel */}
        <div
          ref={containerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-44 md:w-52 snap-start overflow-hidden group cursor-pointer"
              style={{ aspectRatio: '9/16' }}
            >
              {/* Image */}
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] gold jewelry worn on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={item.titleId}
                  className="font-serif text-sm text-ivory font-light italic leading-snug"
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
