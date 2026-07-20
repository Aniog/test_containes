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
    <section ref={containerRef} className="py-16 md:py-24 bg-muted-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Worn by You</h2>
          <p className="mt-3 text-sm text-muted">Real moments, real gold.</p>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {reels.map(reel => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-44 md:w-52 relative rounded-sm overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-charcoal/10 relative">
                <img
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${reel.captionId}] gold jewelry worn on model`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal/70 to-transparent">
                  <p id={reel.captionId} className="font-serif text-sm text-white italic">
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
