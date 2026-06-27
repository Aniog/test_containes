import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { reels } from '@/data/products'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ReelsStrip() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            As Worn
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:px-10"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[260px] shrink-0 snap-start overflow-hidden bg-espresso-soft sm:w-[300px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck warm light`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src={PLACEHOLDER}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
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

      <div className="mx-auto mt-6 max-w-7xl px-6 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-ivory-muted">
          @velmora · Tag us to be featured
        </p>
      </div>
    </section>
  )
}
