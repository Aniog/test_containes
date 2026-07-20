import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-a1b2c3', titleId: 'ugc-reel-1-caption' },
  { id: 'reel-2', caption: 'Layered & loved', imgId: 'ugc-reel-2-d4e5f6', titleId: 'ugc-reel-2-caption' },
  { id: 'reel-3', caption: 'Golden hour', imgId: 'ugc-reel-3-g7h8i9', titleId: 'ugc-reel-3-caption' },
  { id: 'reel-4', caption: 'Gift-worthy', imgId: 'ugc-reel-4-j0k1l2', titleId: 'ugc-reel-4-caption' },
  { id: 'reel-5', caption: 'Stacked & styled', imgId: 'ugc-reel-5-m3n4o5', titleId: 'ugc-reel-5-caption' },
  { id: 'reel-6', caption: 'Date night ready', imgId: 'ugc-reel-6-p6q7r8', titleId: 'ugc-reel-6-caption' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">Worn by You</h2>
          <p className="mt-3 text-sm text-secondary">Real moments, real style — tag @velmora to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry worn on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/70 to-transparent">
                <p id={reel.titleId} className="font-serif text-sm text-cream italic">
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
