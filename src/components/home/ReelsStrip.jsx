import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { reels } from "@/data/products"


export default function ReelsStrip() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest2 text-gold-light">
              As Worn
            </p>
            <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
              On the Community
            </h2>
          </div>
          <p className="hidden max-w-xs font-sans text-sm text-cream/60 md:block">
            Real moments, real wear. Tag @velmora to be featured.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-2 md:px-10"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-ink-soft sm:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
