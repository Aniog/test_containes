import { reels } from "@/data/products"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ReelsStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
              As Worn By You
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Styled in the Wild
            </h2>
          </div>
          <p className="hidden max-w-xs font-sans text-sm text-stone md:block">
            Real pieces, real moments. Tag <span className="text-gold">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-4 md:px-10">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-espresso sm:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic leading-snug text-cream"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
