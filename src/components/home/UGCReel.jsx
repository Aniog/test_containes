import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', query: 'woman wearing gold earrings close up warm' },
  { id: 'reel-2', caption: 'Layered & loved', query: 'gold necklace layered on woman neck' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'gold jewelry gift box unwrapping' },
  { id: 'reel-4', caption: 'Date night ready', query: 'woman gold huggie earrings evening' },
  { id: 'reel-5', caption: 'Minimal luxe', query: 'minimalist gold jewelry on skin' },
  { id: 'reel-6', caption: 'Stack & style', query: 'gold ear cuff stack multiple earrings' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">As Worn By You</h2>
          <p className="mt-3 text-muted-fg text-sm">Real moments, real style. Tag @velmora to be featured.</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={`ugc-${reel.id}-img`}
                data-strk-img={`[ugc-${reel.id}-caption]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={`ugc-${reel.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic"
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
