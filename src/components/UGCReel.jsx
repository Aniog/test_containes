import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const reels = [
  { id: 'r1', caption: 'Everyday elegance ✨', user: '@sarahm' },
  { id: 'r2', caption: 'Stacked & styled', user: '@jessicaw' },
  { id: 'r3', caption: 'Gold moments', user: '@emilyr' },
  { id: 'r4', caption: 'Date night ready', user: '@amandak' },
  { id: 'r5', caption: 'Minimal & chic', user: '@ninab' },
  { id: 'r6', caption: 'Layered love', user: '@clarat' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">Community</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">Styled by You</h2>
          </div>
          <p className="hidden md:block text-xs text-velmora-muted">@velmorajewelry</p>
        </div>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-5 md:px-8 pb-2">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[160px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] gold jewelry worn ear neck closeup`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.7778'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={`ugc-caption-${reel.id}`}
                className="font-serif text-sm text-white/90 italic leading-snug"
              >
                {reel.caption}
              </p>
              <p className="text-[10px] text-white/60 mt-1.5 uppercase tracking-wider">
                {reel.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}