import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', imgId: 'ugc-1-a1b2c3', caption: 'Golden hour with my favorite hoops ✨', handle: '@sophie_m' },
  { id: 'ugc-2', imgId: 'ugc-2-d4e5f6', caption: 'The necklace that started it all', handle: '@elena_rose' },
  { id: 'ugc-3', imgId: 'ugc-3-g7h8i9', caption: 'Stacking and layering forever', handle: '@claire_daily' },
  { id: 'ugc-4', imgId: 'ugc-4-j0k1l2', caption: 'New obsession: gold on gold', handle: '@maya_style' },
  { id: 'ugc-5', imgId: 'ugc-5-m3n4o5', caption: 'Gift from me to me 💛', handle: '@julia_jewels' },
  { id: 'ugc-6', imgId: 'ugc-6-p6q7r8', caption: 'Everyday elegance achieved', handle: '@nina_grace' },
]

export default function UGCSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light text-center">As Seen On You</h2>
        <p className="mt-3 text-sm text-taupe text-center max-w-md mx-auto">
          Tag @velmora to be featured on our page.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-20 pb-4">
        {ugcItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[200px] md:w-[260px]">
            <div className="aspect-[9/16] bg-warm-light rounded-sm overflow-hidden relative">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`UGC by ${item.handle}`}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-caption-${item.id}`} className="text-sm text-cream font-serif italic leading-snug">
                  {item.caption}
                </p>
                <p className="text-xs text-cream/70 mt-1">{item.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}