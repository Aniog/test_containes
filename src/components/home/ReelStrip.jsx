import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { reelItems } from "@/data/products"

export default function ReelStrip() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-10 text-center text-ivory">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-light">
            Worn by You
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light md:text-5xl">
            #VelmoraMoments
          </h2>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:px-10"
      >
        {reelItems.map((item) => (
          <article
            key={item.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink-soft md:w-[260px]"
          >
            <img
              alt={item.caption}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="520"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={item.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-ivory"
            >
              {item.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
