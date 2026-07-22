import { useEffect, useRef } from "react"
import { reels } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PLACEHOLDER } from "@/lib/strk"

export default function ReelStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">
            Worn by You
          </p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
            #VelmoraMoments
          </h2>
        </div>
      </div>

      <div className="no-scrollbar mt-12 flex gap-4 overflow-x-auto px-5 pb-4 md:px-8">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-ink md:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}] jewelry worn on ear neck`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={reel.titleId}
                className="font-serif text-lg italic text-cream"
              >
                {reel.caption}
              </p>
              <p id={reel.descId} className="sr-only">
                {reel.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
