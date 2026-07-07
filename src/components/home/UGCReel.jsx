import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden bg-velmora-charcoal aspect-reel group">
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.titleId}] gold jewelry worn portrait`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          id={item.titleId}
          className="font-cormorant text-sm italic text-velmora-text-light leading-snug"
        >
          "{item.caption}"
        </p>
        <p className="font-manrope text-[9px] tracking-widest text-velmora-gold mt-1">{item.handle}</p>
      </div>

      {/* Instagram reel indicator */}
      <div className="absolute top-3 right-3 opacity-70">
        <div className="w-5 h-5 border border-white/60 rounded-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-white/80 rounded-sm" />
        </div>
      </div>
    </div>
  )
}

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-2">
              As Worn By You
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-dark">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs tracking-widest uppercase text-velmora-text-mid border-b border-velmora-stone/40 pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-all duration-300 hidden md:block"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.slice(0, 2).map(item => (
          <UGCCard key={`${item.id}-dup`} item={{ ...item, imgId: `${item.imgId}-dup` }} />
        ))}
      </div>
    </section>
  )
}
