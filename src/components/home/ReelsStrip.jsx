import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { reels } from "@/data/products"

export function ReelsStrip() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            As Worn
          </p>
          <h2 className="mt-3 font-serif text-4xl text-canvas md:text-5xl">
            Styled by You
          </h2>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink md:w-[280px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[reel-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                id={`reel-caption-${reel.id}`}
                className="font-serif text-lg italic leading-snug text-canvas"
              >
                {reel.caption}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-canvas/70">
                {reel.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
