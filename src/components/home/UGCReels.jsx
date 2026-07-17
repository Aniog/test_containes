import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-h4i5j6', captionId: 'ugc-caption-1' },
  { id: 'reel-2', caption: 'Layered & loved', imgId: 'ugc-reel-2-k7l8m9', captionId: 'ugc-caption-2' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-n0o1p2', captionId: 'ugc-caption-3' },
  { id: 'reel-4', caption: 'Date night ready', imgId: 'ugc-reel-4-q3r4s5', captionId: 'ugc-caption-4' },
  { id: 'reel-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-t6u7v8', captionId: 'ugc-caption-5' },
  { id: 'reel-6', caption: 'Stack & style', imgId: 'ugc-reel-6-w9x0y1', captionId: 'ugc-caption-6' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light">
            As Seen On You
          </h2>
          <p className="text-muted text-sm mt-2">Tag @velmora to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 w-max">
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer">
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] [ugc-section-title] woman wearing gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4">
                <p id={reel.captionId} className="font-serif text-white text-sm italic">
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
