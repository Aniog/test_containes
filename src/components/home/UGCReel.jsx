import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'ugc-1', caption: '"My everyday gold"', sub: 'Vivid Aura Cuff', imgId: 'ugc-reel-1-a1b2', titleId: 'ugc-title-1', descId: 'ugc-desc-1' },
  { id: 'ugc-2', caption: '"Perfect gift"', sub: 'Royal Heirloom Set', imgId: 'ugc-reel-2-c3d4', titleId: 'ugc-title-2', descId: 'ugc-desc-2' },
  { id: 'ugc-3', caption: '"Obsessed"', sub: 'Golden Sphere Huggies', imgId: 'ugc-reel-3-e5f6', titleId: 'ugc-title-3', descId: 'ugc-desc-3' },
  { id: 'ugc-4', caption: '"So delicate"', sub: 'Majestic Flora Nectar', imgId: 'ugc-reel-4-g7h8', titleId: 'ugc-title-4', descId: 'ugc-desc-4' },
  { id: 'ugc-5', caption: '"Wear it daily"', sub: 'Amber Lace Earrings', imgId: 'ugc-reel-5-i9j0', titleId: 'ugc-title-5', descId: 'ugc-desc-5' },
  { id: 'ugc-6', caption: '"Gifted myself"', sub: 'Vivid Aura Jewels', imgId: 'ugc-reel-6-k1l2', titleId: 'ugc-title-6', descId: 'ugc-desc-6' },
]

export function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-velvet-500 mb-2">As Seen On</p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian-800 font-light">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="hidden sm:block font-sans text-xs uppercase tracking-widest text-obsidian-500 hover:text-velvet-500 transition-colors border-b border-obsidian-300 hover:border-velvet-500 pb-0.5"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
        {reels.map(reel => (
          <div
            key={reel.id}
            className="flex-shrink-0 relative rounded overflow-hidden cursor-pointer group"
            style={{ width: '160px', height: '284px', scrollSnapAlign: 'start' }}
          >
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}] woman wearing gold jewelry`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="320"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.sub}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/70 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p id={reel.titleId} className="font-serif text-sm text-cream italic leading-tight">{reel.caption}</p>
              <p id={reel.descId} className="font-sans text-[10px] text-cream/70 uppercase tracking-widest mt-0.5">{reel.sub}</p>
            </div>
            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-cream ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
