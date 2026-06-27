import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'gold earring on ear close up warm light' },
  { id: 'reel-2', caption: 'Layered necklaces', query: 'layered gold necklaces on woman neck' },
  { id: 'reel-3', caption: 'Gift moment', query: 'woman opening jewelry gift box' },
  { id: 'reel-4', caption: 'Date night', query: 'gold huggie earrings evening look' },
  { id: 'reel-5', caption: 'Minimal stack', query: 'minimal gold jewelry stack on wrist and ear' },
  { id: 'reel-6', caption: 'Morning ritual', query: 'woman putting on gold earrings mirror' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center">Worn by You</h2>
        <p className="mt-3 text-muted text-sm text-center">Real moments, real gold</p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map(reel => (
          <div key={reel.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden group">
            <img
              data-strk-img-id={`ugc-${reel.id}-a7f3`}
              data-strk-img={`[ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span
              id={`ugc-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic"
            >
              {reel.caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
