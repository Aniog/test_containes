import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { reels } from '@/data/products'

export default function ReelStrip() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">As Worn</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Styled by You</h2>
        </div>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-10">
        {reels.map((r) => (
          <article
            key={r.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink sm:w-[260px]"
          >
            <img
              alt={r.caption}
              data-strk-img-id={r.imgId}
              data-strk-img={`[${r.descId}] [${r.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="520"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 id={r.titleId} className="sr-only">
                {r.caption}
              </h3>
              <p id={r.descId} className="font-serif text-lg italic leading-snug text-cream">
                {r.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
