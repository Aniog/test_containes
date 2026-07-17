import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a1b2c3', captionId: 'ugc-caption-1' },
  { id: 'reel-2', caption: 'Stacking season', imgId: 'ugc-reel-2-d4e5f6', captionId: 'ugc-caption-2' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-g7h8i9', captionId: 'ugc-caption-3' },
  { id: 'reel-4', caption: 'Date night ready', imgId: 'ugc-reel-4-j0k1l2', captionId: 'ugc-caption-4' },
  { id: 'reel-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-m3n4o5', captionId: 'ugc-caption-5' },
  { id: 'reel-6', caption: 'Golden hour', imgId: 'ugc-reel-6-p6q7r8', captionId: 'ugc-caption-6' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-2">
          Worn by You
        </h2>
        <p className="text-sm text-muted-fg mb-8">Real moments, real gold.</p>
      </div>

      <div ref={containerRef} className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-5 md:px-8 lg:px-12 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] bg-muted rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <div
                className="absolute inset-0"
                data-strk-bg-id={reel.imgId}
                data-strk-bg={`[${reel.captionId}] gold jewelry worn on model`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={reel.captionId}
                  className="font-serif text-sm italic text-white/90"
                >
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
