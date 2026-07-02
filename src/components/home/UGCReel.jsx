import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'gold earring on ear close up warm light' },
  { id: 'reel-2', caption: 'Layered necklaces', query: 'gold layered necklaces on neck editorial' },
  { id: 'reel-3', caption: 'Huggie love', query: 'gold huggie earrings on model ear' },
  { id: 'reel-4', caption: 'Gift-worthy', query: 'jewelry gift box gold elegant' },
  { id: 'reel-5', caption: 'Date night', query: 'gold drop earrings evening look' },
  { id: 'reel-6', caption: 'Minimal stack', query: 'minimal gold jewelry stack rings' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">As Worn by You</h2>
          <p className="mt-3 text-muted-fg text-sm">Tag @velmora to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-muted"
                data-strk-bg-id={`ugc-${reel.id}-bg-7x2k`}
                data-strk-bg={`[ugc-${reel.id}-caption]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-${reel.id}-caption`}
                  className="font-serif text-sm text-white italic"
                >
                  {reel.caption}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-all duration-300 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
