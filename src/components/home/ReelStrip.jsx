import { useEffect, useRef } from 'react'
import { reels } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ReelStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand/50 border-y border-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">
              On Our Community
            </h2>
          </div>
          <p className="hidden md:block text-xs text-taupe max-w-xs text-right">
            Real wear, real light. Tag @velmora to be featured.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x"
      >
        {reels.map((reel) => {
          const captionId = `reel-caption-${reel.id}`
          return (
            <article
              key={reel.id}
              className="relative shrink-0 w-[60vw] sm:w-[260px] md:w-[300px] aspect-[9/16] overflow-hidden bg-espresso snap-start group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${captionId}] gold jewelry worn on ear neck editorial close up`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={captionId}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg text-ivory italic"
              >
                {reel.caption}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
