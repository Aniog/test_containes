import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', query: 'woman wearing gold earrings close up warm light' },
  { id: 'reel-2', caption: 'Layered & loved', query: 'gold necklace layered on woman neck editorial' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'jewelry gift box gold ribbon luxury' },
  { id: 'reel-4', caption: 'Date night ready', query: 'woman gold huggie earrings evening look' },
  { id: 'reel-5', caption: 'Morning ritual', query: 'woman putting on gold earrings mirror morning' },
  { id: 'reel-6', caption: 'Stack & style', query: 'gold rings and bracelets stacked on wrist' },
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
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-light">Worn by You</h2>
          <p className="text-sm text-brand-muted mt-3 font-sans">Real moments, real style — #VelmoraWomen</p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 flex-shrink-0 overflow-hidden rounded-sm group cursor-pointer">
              <div className="aspect-[9/16] bg-brand-sand">
                <img
                  data-strk-img-id={`ugc-${reel.id}-a7b3c1`}
                  data-strk-img={`[ugc-caption-${reel.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
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
