import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-2">As Seen On</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">Real Women, Real Jewelry</h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-medium text-ink-muted hover:text-gold transition-colors duration-300 group"
          >
            @velmora
            <span className="w-6 h-px bg-ink-muted group-hover:bg-gold group-hover:w-10 transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 lg:px-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 snap-start overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] woman wearing gold jewelry close up portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-serif text-sm italic text-ivory leading-snug"
              >
                {item.caption}
              </p>
              <p className="font-sans text-xs text-ivory-muted mt-1">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
