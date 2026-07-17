import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">As Worn</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="hidden sm:block font-sans text-xs tracking-widest uppercase text-mist hover:text-gold transition-colors border-b border-mist/40 hover:border-gold pb-0.5"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 overflow-x-auto scrollbar-hide px-6 lg:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Background image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-serif text-sm italic text-champagne leading-snug"
              >
                {item.caption}
              </p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/60 transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
