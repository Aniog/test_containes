import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', imgId: 'ugc-reel-1-img-a1b2c3', titleId: 'ugc-1-title', caption: 'Golden hour, golden jewelry', sub: '@sophiar' },
  { id: 'ugc-2', imgId: 'ugc-reel-2-img-d4e5f6', titleId: 'ugc-2-title', caption: 'My everyday stack', sub: '@camilletx' },
  { id: 'ugc-3', imgId: 'ugc-reel-3-img-g7h8i9', titleId: 'ugc-3-title', caption: 'The perfect gift', sub: '@isabellem' },
  { id: 'ugc-4', imgId: 'ugc-reel-4-img-j1k2l3', titleId: 'ugc-4-title', caption: 'Demi-fine obsessed', sub: '@nataliev' },
  { id: 'ugc-5', imgId: 'ugc-reel-5-img-m4n5o6', titleId: 'ugc-5-title', caption: 'Layering season', sub: '@auroraa' },
  { id: 'ugc-6', imgId: 'ugc-reel-6-img-p7q8r9', titleId: 'ugc-6-title', caption: 'Ear party goals', sub: '@luciaw' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-3">As Worn By You</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-manrope text-xs uppercase tracking-[0.12em] text-taupe hover:text-gold transition-colors duration-300 underline underline-offset-4"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div key={item.id} className="flex-shrink-0 w-44 md:w-56 relative group cursor-pointer">
            {/* 9:16 aspect ratio card */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '9/16' }}>
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] gold jewelry worn on ear neck woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p id={item.titleId} className="font-cormorant text-sm italic text-cream leading-tight">
                  {item.caption}
                </p>
                <p className="font-manrope text-[10px] text-cream/70 mt-1">{item.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
