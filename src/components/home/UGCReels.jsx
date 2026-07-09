import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-x1y2z3' },
  { id: 'reel-2', caption: 'Stacked & styled', imgId: 'ugc-reel-2-a4b5c6' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-d7e8f9' },
  { id: 'reel-4', caption: 'Date night ready', imgId: 'ugc-reel-4-g0h1i2' },
  { id: 'reel-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-j3k4l5' },
  { id: 'reel-6', caption: 'The ear party', imgId: 'ugc-reel-6-m6n7o8' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-muted-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">As Seen On You</h2>
          <p className="mt-3 text-muted text-sm">Real moments, real gold. Tag @velmora to be featured.</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] bg-charcoal/10 overflow-hidden flex-shrink-0 group">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[ugc-caption-${reel.id}] woman wearing gold jewelry close up portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${reel.id}`}
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
