import { useEffect, useRef } from 'react'
import { reels } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ReelsRow() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8 mb-10">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
            As Worn
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            On the Community
          </h2>
        </div>
      </div>

      <div
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-8 pb-4 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative flex-shrink-0 w-[68vw] sm:w-[280px] aspect-[9x16] snap-start overflow-hidden bg-espresso group"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn ear neck editorial warm`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-0 inset-x-0 p-5 font-serif text-ivory text-xl italic leading-snug"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
