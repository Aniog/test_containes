import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'woman wearing gold earrings close up warm light' },
  { id: 'reel-2', caption: 'Layered necklaces', query: 'woman layered gold necklaces editorial' },
  { id: 'reel-3', caption: 'Huggie stack', query: 'gold huggie earrings on ear close up' },
  { id: 'reel-4', caption: 'Gift moment', query: 'jewelry gift box opening hands' },
  { id: 'reel-5', caption: 'Date night', query: 'woman gold jewelry evening outfit' },
  { id: 'reel-6', caption: 'Minimal luxe', query: 'minimalist gold jewelry flat lay' },
]

export default function UGCReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="px-5 md:px-10 lg:px-20 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">Worn by You</h2>
        <p className="mt-2 font-sans text-sm text-brand-muted">Real moments, real gold</p>
      </div>

      <div className="flex gap-4 px-5 md:px-10 lg:px-20 overflow-x-auto pb-4 scrollbar-hide">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] bg-brand-ivory overflow-hidden group cursor-pointer"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={`ugc-${reel.id}-a7b3c1`}
              data-strk-img={`[ugc-caption-${reel.id}] gold jewelry`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span
              id={`ugc-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
            >
              {reel.caption}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
