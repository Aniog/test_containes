import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'woman wearing gold earrings close up warm light' },
  { id: 'reel-2', caption: 'Layer it up', query: 'gold necklace layering on woman neck editorial' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'jewelry gift box gold velvet luxury' },
  { id: 'reel-4', caption: 'Date night', query: 'woman gold huggie earrings evening look' },
  { id: 'reel-5', caption: 'Minimal luxe', query: 'minimalist gold jewelry on skin warm tone' },
  { id: 'reel-6', caption: 'Stack & style', query: 'gold ear cuff stack multiple earrings editorial' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center">Worn by You</h2>
        <p className="mt-3 text-sm text-muted-fg font-sans text-center">Real moments, real style</p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map(reel => (
          <div key={reel.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] bg-muted overflow-hidden group cursor-pointer">
            <span id={`ugc-${reel.id}-caption`} className="sr-only">{reel.caption}</span>

            <img
              data-strk-img-id={`ugc-${reel.id}-img-x9z2`}
              data-strk-img={`[ugc-${reel.id}-caption] gold jewelry on woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
              <p className="font-serif text-sm text-white italic">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
