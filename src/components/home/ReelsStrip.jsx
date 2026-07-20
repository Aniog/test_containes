import { useEffect, useRef } from 'react'
import { reels } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ReelsStrip() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-stone mb-3">#VelmoraWomen</p>
            <h2 className="font-serif text-4xl md:text-5xl">Worn By You</h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Real moments, real wear. Tag <span className="text-ink">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] snap-start overflow-hidden bg-ink group"
          >
            <img
              src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-cream text-xl italic leading-snug"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
