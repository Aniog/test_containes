import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-q8w9e0' },
  { id: 'reel-2', caption: 'Layered & loved', imgId: 'ugc-reel-2-r1t2y3' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-u4i5o6' },
  { id: 'reel-4', caption: 'Golden hour', imgId: 'ugc-reel-4-p7a8s9' },
  { id: 'reel-5', caption: 'Stack & style', imgId: 'ugc-reel-5-d0f1g2' },
  { id: 'reel-6', caption: 'Date night ready', imgId: 'ugc-reel-6-h3j4k5' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-3">
            As Seen On
          </h2>
          <p className="text-sm text-brand-muted">Real women, real style. Tag @velmora to be featured.</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.id}-caption] woman wearing gold jewelry close up`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={`${reel.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
