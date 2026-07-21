import { useEffect, useRef } from 'react'
import { reels } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export function ReelsRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">As Worn</p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink">#VelmoraOnYou</h2>
          <p className="mt-4 max-w-md text-sm md:text-base text-stone leading-relaxed">
            Real moments, real wear. Tag us to be featured.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:px-8 pb-2"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[230px] flex-shrink-0 snap-start overflow-hidden bg-ink md:w-[280px]"
          >
            <img
              src={PLACEHOLDER}
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn ear neck editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg md:text-xl italic text-cream leading-snug"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
