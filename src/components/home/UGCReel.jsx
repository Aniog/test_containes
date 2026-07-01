import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden rounded-sm bg-parchment aspect-[9/16]">
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velvet/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p id={item.titleId} className="font-serif text-sm text-cream italic leading-snug">
          {item.caption}
        </p>
      </div>

      {/* Hidden desc for image query */}
      <span id={item.descId} className="hidden">{item.description}</span>
    </div>
  )
}

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">As Worn</p>
            <h2 className="font-serif text-2xl md:text-3xl text-velvet font-light">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs uppercase tracking-widest text-mink hover:text-gold transition-colors border-b border-mink/30 pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.slice(0, 3).map(item => (
          <UGCCard key={`${item.id}-dup`} item={{ ...item, imgId: `${item.imgId}-dup` }} />
        ))}
      </div>
    </section>
  )
}
