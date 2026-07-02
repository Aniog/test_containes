import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-p7q8r9', titleId: 'ugc-reel-1-caption' },
  { id: 'reel-2', caption: 'Stacking huggies', imgId: 'ugc-reel-2-s1t2u3', titleId: 'ugc-reel-2-caption' },
  { id: 'reel-3', caption: 'Date night ready', imgId: 'ugc-reel-3-v4w5x6', titleId: 'ugc-reel-3-caption' },
  { id: 'reel-4', caption: 'Gifting moments', imgId: 'ugc-reel-4-y7z8a1', titleId: 'ugc-reel-4-caption' },
  { id: 'reel-5', caption: 'Layered necklaces', imgId: 'ugc-reel-5-b2c3d4', titleId: 'ugc-reel-5-caption' },
  { id: 'reel-6', caption: 'Minimal elegance', imgId: 'ugc-reel-6-e5f6g7', titleId: 'ugc-reel-6-caption' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-ivory" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Worn by You</h2>
          <p className="mt-2 text-taupe text-sm">Real moments, real sparkle</p>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {reels.map(reel => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-sand relative">
                <img
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${reel.titleId}] gold jewelry woman wearing`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal/70 to-transparent">
                  <p id={reel.titleId} className="font-serif text-sm text-white italic">
                    {reel.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
