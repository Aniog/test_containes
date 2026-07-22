import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { reels } from '@/data/products'

export default function ReelsStrip() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Worn by You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              As Seen on Reels
            </h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs">
            Tag <span className="text-ink">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto pb-4">
        <div className="flex gap-4 md:gap-6 px-5 md:px-8 snap-x snap-mandatory">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] snap-start overflow-hidden bg-espresso group"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.descId}] [${reel.titleId}] jewelry worn on ear neck editorial vertical`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="sr-only"
              >
                {reel.caption}
              </p>
              <p id={reel.descId} className="sr-only">
                Velmora fine jewelry {reel.caption}
              </p>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="font-serif text-ivory text-xl italic leading-snug">
                  {reel.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
