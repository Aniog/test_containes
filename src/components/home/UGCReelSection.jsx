import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReelSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-velmora-cream py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-2">
              @velmora
            </p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-velmora-text">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 font-manrope text-[10px] tracking-[0.14em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors border-b border-velmora-muted hover:border-velmora-gold pb-0.5"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 sm:w-52 lg:w-60 overflow-hidden group cursor-pointer"
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
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-cormorant text-sm italic text-white/90 leading-snug"
              >
                {item.caption}
              </p>
            </div>

            {/* Instagram reel indicator */}
            <div className="absolute top-3 right-3 opacity-60">
              <div className="w-5 h-5 border border-white/60 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white/80 rounded-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
