import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-e4f5g6', titleId: 'ugc-reel-1-title' },
  { id: 'reel-2', caption: 'Layered necklaces', imgId: 'ugc-reel-2-h7i8j9', titleId: 'ugc-reel-2-title' },
  { id: 'reel-3', caption: 'Ear stack goals', imgId: 'ugc-reel-3-k1l2m3', titleId: 'ugc-reel-3-title' },
  { id: 'reel-4', caption: 'Gift-worthy', imgId: 'ugc-reel-4-n4o5p6', titleId: 'ugc-reel-4-title' },
  { id: 'reel-5', caption: 'Date night ready', imgId: 'ugc-reel-5-q7r8s9', titleId: 'ugc-reel-5-title' },
  { id: 'reel-6', caption: 'Minimal luxe', imgId: 'ugc-reel-6-t1u2v3', titleId: 'ugc-reel-6-title' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl lg:text-4xl font-light text-charcoal">
            As Worn by You
          </h2>
          <p className="mt-3 text-sm text-muted-fg font-sans">Real moments, real gold</p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 sm:w-52 flex-shrink-0 group cursor-pointer">
              <div className="aspect-[9/16] bg-muted overflow-hidden relative">
                <img
                  alt={reel.caption}
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${reel.titleId}] [ugc-section-title] gold jewelry woman wearing`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <span
                  id={reel.titleId}
                  className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
                >
                  {reel.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
