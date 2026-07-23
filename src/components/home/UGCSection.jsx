import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors duration-200 flex items-center gap-2 self-start md:self-auto"
          >
            @velmora
            <span className="text-velmora-gold">→</span>
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>
            <span id={item.descId} className="sr-only">{item.description}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-cormorant text-sm italic text-velmora-ivory leading-snug">
                "{item.caption}"
              </p>
            </div>

            {/* Instagram reel indicator */}
            <div className="absolute top-3 right-3">
              <div className="w-5 h-5 rounded-full bg-velmora-ivory/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-velmora-ivory ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
