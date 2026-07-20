import { useEffect, useRef } from 'react'
import { reels } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'


export default function ReelStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            As Worn
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-cream md:text-5xl">
            On the Reels
          </h2>
        </div>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-4 md:px-8">
        {reels.map((reel) => {
          const capId = `reel-cap-${reel.id}`
          return (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-ink md:w-[280px]"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${capId}] gold jewelry worn on model editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <p
                id={capId}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
              >
                {reel.caption}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
