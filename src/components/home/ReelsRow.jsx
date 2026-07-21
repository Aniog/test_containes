import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const REELS = [
  {
    id: 'reel-1',
    caption: 'Golden Sphere Huggies, every day.',
    titleId: 'reel-1-title',
  },
  {
    id: 'reel-2',
    caption: 'Amber Lace, caught in low light.',
    titleId: 'reel-2-title',
  },
  {
    id: 'reel-3',
    caption: 'Majestic Flora, a garden at the collarbone.',
    titleId: 'reel-3-title',
  },
  {
    id: 'reel-4',
    caption: 'Vivid Aura, the everyday ear cuff.',
    titleId: 'reel-4-title',
  },
  {
    id: 'reel-5',
    caption: 'Royal Heirloom, ready to gift.',
    titleId: 'reel-5-title',
  },
]

export default function ReelsRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-light">As Worn</p>
          <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">#VelmoraOnYou</h2>
        </div>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-8"
      >
        {REELS.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink md:w-[280px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={`${reel.id}-img`}
              data-strk-img={`[${reel.titleId}] gold jewelry worn ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic leading-snug text-ivory"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs uppercase tracking-widest2 text-ivory/50">
        Swipe →
      </p>
    </section>
  )
}
