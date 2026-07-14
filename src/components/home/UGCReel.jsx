import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'woman wearing gold earrings close up warm light' },
  { id: 'reel-2', caption: 'Layered necklaces', query: 'woman layered gold necklaces editorial' },
  { id: 'reel-3', caption: 'Huggie love', query: 'gold huggie earrings on ear close up' },
  { id: 'reel-4', caption: 'Gift moments', query: 'jewelry gift box opening hands' },
  { id: 'reel-5', caption: 'Date night', query: 'woman gold jewelry evening outfit elegant' },
  { id: 'reel-6', caption: 'Minimal stack', query: 'minimal gold rings stacked on hand' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          Worn by You
        </h2>
        <p id="ugc-subtitle" className="mt-3 text-sm text-muted-fg font-sans text-center">
          Real moments, real gold
        </p>
      </div>

      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${reel.id}-d4e5f6`}
              data-strk-img={`[ugc-caption-${reel.id}] [ugc-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
