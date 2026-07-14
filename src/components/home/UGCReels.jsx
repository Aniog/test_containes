import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', descId: 'ugc-reel-1-caption', imgId: 'ugc-reel-1-img-x7k2' },
  { id: 'reel-2', caption: 'Stacking season', descId: 'ugc-reel-2-caption', imgId: 'ugc-reel-2-img-m3p9' },
  { id: 'reel-3', caption: 'Gift-worthy', descId: 'ugc-reel-3-caption', imgId: 'ugc-reel-3-img-q5w1' },
  { id: 'reel-4', caption: 'Date night ready', descId: 'ugc-reel-4-caption', imgId: 'ugc-reel-4-img-r8t4' },
  { id: 'reel-5', caption: 'Minimal luxe', descId: 'ugc-reel-5-caption', imgId: 'ugc-reel-5-img-v2n6' },
  { id: 'reel-6', caption: 'Golden hour', descId: 'ugc-reel-6-caption', imgId: 'ugc-reel-6-img-b4j8' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            Worn by You
          </h2>
          <p className="mt-3 text-sm text-brand-taupe font-sans">
            Real moments, real gold. Tag @velmora to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 w-max">
          {reels.map(reel => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] bg-brand-ivory overflow-hidden flex-shrink-0 group"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.descId}] gold jewelry worn on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p
                  id={reel.descId}
                  className="font-serif text-sm text-white italic"
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
