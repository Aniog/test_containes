import { useEffect, useRef } from 'react'
import { reels } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ReelsRow() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              #VelmoraMoments
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Worn by You</h2>
          </div>
          <p className="hidden md:block text-sm text-muted font-light max-w-xs text-right">
            Real pieces, real wear. Tag us to be featured.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-10 pb-4 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] overflow-hidden bg-ink snap-start group"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg text-ivory italic leading-snug"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
