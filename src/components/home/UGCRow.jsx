import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcCaptions } from '@/data/products'

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-velmora-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-manrope text-[9px] tracking-[0.3em] uppercase text-velmora-gold mb-2">
              As Worn
            </p>
            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-velmora-ink tracking-wide">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-[9px] tracking-[0.2em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors duration-200 hidden md:block"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-2"
      >
        {ugcCaptions.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-cormorant text-sm italic leading-snug"
                style={{ color: '#FAF7F2' }}
              >
                {item.caption}
              </p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-velmora-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
