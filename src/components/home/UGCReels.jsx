import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a3b4c5', titleId: 'ugc-reel-1-title' },
  { id: 'reel-2', caption: 'Layered necklaces', imgId: 'ugc-reel-2-d6e7f8', titleId: 'ugc-reel-2-title' },
  { id: 'reel-3', caption: 'Ear stack goals', imgId: 'ugc-reel-3-g9h0i1', titleId: 'ugc-reel-3-title' },
  { id: 'reel-4', caption: 'Gift-worthy', imgId: 'ugc-reel-4-j2k3l4', titleId: 'ugc-reel-4-title' },
  { id: 'reel-5', caption: 'Date night ready', imgId: 'ugc-reel-5-m5n6o7', titleId: 'ugc-reel-5-title' },
  { id: 'reel-6', caption: 'Minimal luxe', imgId: 'ugc-reel-6-p8q9r0', titleId: 'ugc-reel-6-title' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Worn by You</h2>
          <p className="mt-3 text-sm text-muted-fg">Real moments, real gold</p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 md:px-12 hide-scrollbar">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden bg-muted group cursor-pointer"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] woman wearing gold jewelry`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <span
              id={reel.titleId}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic"
            >
              {reel.caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
