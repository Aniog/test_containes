import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { reels } from "@/data/products"

export default function ReelsStrip() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="bg-ink-900 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10 flex items-end justify-between">
        <div className="reveal">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">#VelmoraWomen</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream">Worn & Loved</h2>
        </div>
        <p className="hidden md:block text-sm text-ink-200 max-w-xs reveal">
          Real moments, real wear. Tag us to be featured.
        </p>
      </div>

      <div
        ref={ref}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[60vw] sm:w-[260px] md:w-[300px] aspect-[9/16] snap-start overflow-hidden bg-ink-800 group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg text-cream italic leading-snug"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
