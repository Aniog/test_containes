import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  {
    id: 1,
    caption: 'Everyday elegance',
    ratio: '9x16',
  },
  {
    id: 2,
    caption: 'Layered & lovely',
    ratio: '9x16',
  },
  {
    id: 3,
    caption: 'Statement piece',
    ratio: '9x16',
  },
  {
    id: 4,
    caption: 'Golden hour glow',
    ratio: '9x16',
  },
  {
    id: 5,
    caption: 'Effortless style',
    ratio: '9x16',
  },
  {
    id: 6,
    caption: 'Gift-worthy',
    ratio: '9x16',
  },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">
          As Seen On You
        </p>
        <h2 id="ugc-section-title" className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
          #VelmoraStyle
        </h2>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] snap-start"
          >
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-stone-200">
              <img
                data-strk-img-id={`ugc-reel-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] [ugc-section-title] jewelry on woman editorial`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-sm text-white/90 italic"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
