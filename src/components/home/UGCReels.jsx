import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'woman wearing gold earrings close up warm light' },
  { id: 'reel-2', caption: 'Layered necklaces', query: 'woman layered gold necklaces editorial' },
  { id: 'reel-3', caption: 'Huggie love', query: 'gold huggie earrings on ear close up' },
  { id: 'reel-4', caption: 'Gift-worthy', query: 'gold jewelry gift box luxury' },
  { id: 'reel-5', caption: 'Date night', query: 'woman gold drop earrings evening' },
  { id: 'reel-6', caption: 'Minimal stack', query: 'minimal gold jewelry stack rings earrings' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">As Seen On You</h2>
          <p className="mt-3 text-muted-fg text-sm">Tag @velmora to be featured</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={`ugc-${reel.id}-x7y8z9`}
                data-strk-img={`[ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${reel.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic"
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
