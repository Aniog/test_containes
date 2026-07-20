import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour with my Golden Sphere Huggies', handle: '@sophia_grace', imgId: 'ugc-gold-huggie-worn-a1' },
  { id: 'ugc-2', caption: 'The Majestic Flora necklace is everything', handle: '@emma_jstyle', imgId: 'ugc-flora-necklace-worn-b2' },
  { id: 'ugc-3', caption: 'Vivid Aura cuff — my new daily staple', handle: '@lily_adorns', imgId: 'ugc-ear-cuff-worn-c3' },
  { id: 'ugc-4', caption: 'Amber Lace for date night', handle: '@chloe_sparkle', imgId: 'ugc-filigree-earrings-worn-d4' },
  { id: 'ugc-5', caption: 'Royal Heirloom set arrived in the prettiest box', handle: '@mia_jewelbox', imgId: 'ugc-gift-set-unboxing-e5' },
  { id: 'ugc-6', caption: 'Stacking these huggies with my everyday hoops', handle: '@zara_xo', imgId: 'ugc-huggie-stack-worn-f6' },
]

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-dark-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-xs tracking-widest uppercase text-gold-600 font-medium">As Seen On You</span>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-900 mt-3">Worn in Real Life</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-6 lg:px-8" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-48 md:w-56">
              <div className="aspect-[9/16] bg-dark-200 relative overflow-hidden group cursor-pointer">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[ugc-caption-${item.id}] [ugc-handle-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p id={`ugc-caption-${item.id}`} className="text-white text-xs leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                  <p id={`ugc-handle-${item.id}`} className="text-gold-300 text-[10px] tracking-wider mt-1">
                    {item.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}