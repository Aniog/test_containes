import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', desc: 'Woman wearing gold earrings casual style', imgId: 'ugc-reel-1-a7b3c2' },
  { id: 'reel-2', caption: 'Stacked & styled', desc: 'Layered gold necklaces on woman', imgId: 'ugc-reel-2-d4e5f6' },
  { id: 'reel-3', caption: 'Gift-worthy', desc: 'Gold jewelry gift box elegant', imgId: 'ugc-reel-3-g7h8i9' },
  { id: 'reel-4', caption: 'Golden hour', desc: 'Woman gold jewelry sunset portrait', imgId: 'ugc-reel-4-j1k2l3' },
  { id: 'reel-5', caption: 'Date night ready', desc: 'Woman wearing gold earrings evening', imgId: 'ugc-reel-5-m4n5o6' },
  { id: 'reel-6', caption: 'Minimal luxe', desc: 'Minimalist gold hoop earrings close up', imgId: 'ugc-reel-6-p7q8r9' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold">
            @velmora
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-espresso mt-3">
            As Worn by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {reels.map(reel => (
            <div
              key={reel.id}
              className="relative w-48 md:w-56 aspect-[9/16] bg-brand-sand rounded-sm overflow-hidden group flex-shrink-0"
            >
              {/* Hidden description for image query */}
              <span id={`ugc-desc-${reel.id}`} className="sr-only">{reel.desc}</span>

              {/* Background image */}
              <div
                className="absolute inset-0"
                data-strk-bg-id={reel.imgId}
                data-strk-bg={`[ugc-desc-${reel.id}] [ugc-caption-${reel.id}]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p id={`ugc-caption-${reel.id}`} className="font-serif text-sm text-white italic">
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
