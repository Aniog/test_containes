import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden rounded-sm group">
      {/* 9:16 aspect ratio */}
      <div className="aspect-[9/16] relative overflow-hidden bg-charcoal">
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}]`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            id={item.titleId}
            className="font-serif text-sm font-light italic text-ivory leading-snug mb-1"
          >
            "{item.caption}"
          </p>
          <p id={item.descId} className="text-[10px] font-sans text-ivory/60 uppercase tracking-[0.15em]">
            {item.username}
          </p>
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
    <section ref={containerRef} className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink tracking-wide">
              The Velmora Edit
            </h2>
          </div>
          <p className="text-sm font-sans text-muted font-light">
            Tag us <span className="text-gold">@velmorajewelry</span> to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
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
