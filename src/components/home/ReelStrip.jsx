import { useRef } from 'react'
import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { reels } from '@/data/products'


export default function ReelStrip() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne">As Seen On You</p>
          <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">#VelmoraMoments</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/70">
            Real styling, real wear. Tag us to be featured.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink sm:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] jewelry worn on ear neck styling vertical reel`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-ivory"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
