import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-a3b4c5', titleId: 'ugc-reel-1-caption' },
  { id: 'reel-2', caption: 'Layered & loved', imgId: 'ugc-reel-2-d6e7f8', titleId: 'ugc-reel-2-caption' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-g9h0i1', titleId: 'ugc-reel-3-caption' },
  { id: 'reel-4', caption: 'Golden hour', imgId: 'ugc-reel-4-j2k3l4', titleId: 'ugc-reel-4-caption' },
  { id: 'reel-5', caption: 'Stack & style', imgId: 'ugc-reel-5-m5n6o7', titleId: 'ugc-reel-5-caption' },
  { id: 'reel-6', caption: 'Date night ready', imgId: 'ugc-reel-6-p8q9r0', titleId: 'ugc-reel-6-caption' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">Worn by You</h2>
          <p className="mt-3 text-sm text-muted">Real moments, real style</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 min-w-max">
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] woman wearing gold jewelry portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p id={reel.titleId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
