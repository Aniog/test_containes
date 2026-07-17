import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-a8f2c1' },
  { id: 'reel-2', caption: 'Stacked & styled', imgId: 'ugc-reel-2-b3d4e5' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-c6f7g8' },
  { id: 'reel-4', caption: 'Golden hour', imgId: 'ugc-reel-4-d9h0i1' },
  { id: 'reel-5', caption: 'Date night ready', imgId: 'ugc-reel-5-e2j3k4' },
  { id: 'reel-6', caption: 'Minimal luxe', imgId: 'ugc-reel-6-f5l6m7' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Worn by You</h2>
          <p className="mt-2 text-muted-fg font-sans text-sm">Real moments, real style. Tag @velmora to be featured.</p>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 hide-scrollbar pb-4">
        {reels.map(reel => (
          <div key={reel.id} className="relative flex-shrink-0 w-44 sm:w-52 aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer">
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.id}-caption] woman wearing gold jewelry close up`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={`${reel.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
