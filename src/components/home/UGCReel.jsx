import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', query: 'gold earring on ear close up warm light' },
  { id: 'reel-2', caption: 'Layered & loved', query: 'gold necklace layered on neck editorial' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'jewelry gift box gold velvet luxury' },
  { id: 'reel-4', caption: 'The huggie edit', query: 'gold huggie earring on ear minimal' },
  { id: 'reel-5', caption: 'Golden hour', query: 'woman wearing gold jewelry sunset warm' },
  { id: 'reel-6', caption: 'Stack & style', query: 'gold rings stacked on hand editorial' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-charcoal font-light">
            As Worn by You
          </h2>
          <p className="mt-3 text-sm text-velmora-stone">
            @velmora — Tag us to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 sm:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={`ugc-${reel.id}-img-x7k9`}
                data-strk-img={`[ugc-${reel.id}-caption]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p id={`ugc-${reel.id}-caption`} className="font-serif text-sm text-white italic">
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
