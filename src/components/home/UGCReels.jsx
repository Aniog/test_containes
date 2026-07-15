import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', titleId: 'ugc-reel-1-title', imgId: 'ugc-reel-img-1a2b3c' },
  { id: 'reel-2', caption: 'Stacking season', titleId: 'ugc-reel-2-title', imgId: 'ugc-reel-img-4d5e6f' },
  { id: 'reel-3', caption: 'Date night ready', titleId: 'ugc-reel-3-title', imgId: 'ugc-reel-img-7g8h9i' },
  { id: 'reel-4', caption: 'Gift wrapped', titleId: 'ugc-reel-4-title', imgId: 'ugc-reel-img-j1k2l3' },
  { id: 'reel-5', caption: 'Minimal luxe', titleId: 'ugc-reel-5-title', imgId: 'ugc-reel-img-m4n5o6' },
  { id: 'reel-6', caption: 'Golden hour', titleId: 'ugc-reel-6-title', imgId: 'ugc-reel-img-p7q8r9' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl text-brand-charcoal">
            As Seen On You
          </h2>
          <p className="mt-3 font-sans text-sm text-brand-muted">
            Tag @velmora to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 w-max">
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group">
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                <span id={reel.titleId} className="font-serif text-sm text-white italic">
                  {reel.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
