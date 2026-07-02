import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden rounded-sm aspect-[9/16] bg-parchment group">
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velvet/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-serif text-sm italic text-cream leading-snug mb-1">
          {item.caption}
        </p>
        <p className="font-sans text-[10px] text-cream/60 tracking-wide">
          {item.handle}
        </p>
      </div>

      {/* Hidden text for image query */}
      <span id={item.titleId} className="sr-only">{item.caption}</span>
      <span id={item.descId} className="sr-only">{item.desc}</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-widest3 uppercase text-champagne mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-[10px] tracking-widest uppercase text-stone hover:text-champagne transition-colors border-b border-stone/30 pb-0.5"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
