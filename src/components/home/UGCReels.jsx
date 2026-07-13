import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', descId: 'ugc-reel-1-caption', imgId: 'ugc-reel-1-img-x7k2' },
  { id: 'reel-2', caption: 'Stacking huggies', descId: 'ugc-reel-2-caption', imgId: 'ugc-reel-2-img-m3p9' },
  { id: 'reel-3', caption: 'Date night ready', descId: 'ugc-reel-3-caption', imgId: 'ugc-reel-3-img-q5w1' },
  { id: 'reel-4', caption: 'Gift unboxing', descId: 'ugc-reel-4-caption', imgId: 'ugc-reel-4-img-r8t4' },
  { id: 'reel-5', caption: 'Layered necklaces', descId: 'ugc-reel-5-caption', imgId: 'ugc-reel-5-img-v2n6' },
  { id: 'reel-6', caption: 'Morning light', descId: 'ugc-reel-6-caption', imgId: 'ugc-reel-6-img-b4j8' },
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
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            Worn by You
          </h2>
          <p className="mt-2 text-muted-fg text-sm">@velmora on Instagram</p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] bg-muted overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.descId}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={reel.descId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
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
