import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a7b3c2' },
  { id: 'reel-2', caption: 'Stacked & styled', imgId: 'ugc-reel-2-d4e5f6' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-g7h8i9' },
  { id: 'reel-4', caption: 'Date night ready', imgId: 'ugc-reel-4-j1k2l3' },
  { id: 'reel-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-m4n5o6' },
  { id: 'reel-6', caption: 'The perfect pair', imgId: 'ugc-reel-6-p7q8r9' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          Worn by You
        </h2>
        <p id="ugc-section-subtitle" className="mt-3 text-sm text-muted text-center">
          Real women, real moments. Tag @velmora to be featured.
        </p>
      </div>

      <div ref={containerRef} className="flex gap-4 px-6 overflow-x-auto pb-4 scrollbar-hide">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-ivory overflow-hidden group cursor-pointer"
          >
            <div
              data-strk-bg-id={reel.imgId}
              data-strk-bg={`[${reel.id}-caption] [ugc-section-title]`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="400"
              className="absolute inset-0 bg-ivory transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
              <p id={`${reel.id}-caption`} className="font-serif text-sm text-white italic">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
