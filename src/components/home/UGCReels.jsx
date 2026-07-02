import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-a7b3c2' },
  { id: 'reel-2', caption: 'Stacking season', imgId: 'ugc-reel-2-d4e5f6' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-g7h8i9' },
  { id: 'reel-4', caption: 'Golden hour', imgId: 'ugc-reel-4-j1k2l3' },
  { id: 'reel-5', caption: 'Date night ready', imgId: 'ugc-reel-5-m4n5o6' },
  { id: 'reel-6', caption: 'Minimal luxe', imgId: 'ugc-reel-6-p7q8r9' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal">
            Worn by You
          </h2>
          <p className="text-sm text-brand-muted mt-2 font-sans">
            @velmora on Instagram
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] bg-brand-sand overflow-hidden group cursor-pointer flex-shrink-0">
              {/* Background image */}
              <div
                className="absolute inset-0"
                data-strk-bg-id={reel.imgId}
                data-strk-bg={`[${reel.id}-caption] gold jewelry worn on model`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                <p id={`${reel.id}-caption`} className="font-serif text-sm text-white italic">
                  {reel.caption}
                </p>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
