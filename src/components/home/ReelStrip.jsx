import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const REELS = [
  {
    id: 'reel-ear',
    caption: 'Golden Sphere Huggies, worn daily',
    query: 'gold huggie earring worn on ear close up',
  },
  {
    id: 'reel-neck',
    caption: 'Majestic Flora, in bloom',
    query: 'gold floral crystal necklace worn on neck close up',
  },
  {
    id: 'reel-cuff',
    caption: 'Vivid Aura, stacked high',
    query: 'gold ear cuff worn on ear cartilage close up',
  },
  {
    id: 'reel-drop',
    caption: 'Amber Lace, heirloom glow',
    query: 'gold filigree drop earring worn on ear close up',
  },
  {
    id: 'reel-set',
    caption: 'The Heirloom Set, gifted',
    query: 'gold jewelry gift set necklace earrings warm close up',
  },
]

export default function ReelStrip() {
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest2 text-champagne-deep mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">On the Reels</h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Real moments, real wear. Tag @velmora to be featured.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-6 px-6 md:px-10 pb-2">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[64vw] sm:w-[280px] aspect-[9/16] overflow-hidden bg-ink group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={`${reel.id}-img`}
                data-strk-img={`[reel-caption-${reel.id}] ${reel.query}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={`reel-caption-${reel.id}`}
                className="absolute bottom-5 left-5 right-5 font-serif text-cream text-lg italic leading-snug"
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
