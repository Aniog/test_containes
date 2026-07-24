import { useEffect, useRef } from "react"
import { REELS } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

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
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8 mb-10">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            Worn by You
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Styled in Real Life
          </h2>
        </div>
      </div>

      <div
        className="flex gap-4 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x snap-mandatory"
      >
        {REELS.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] overflow-hidden bg-ink snap-start group"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg md:text-xl text-white italic leading-snug"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
