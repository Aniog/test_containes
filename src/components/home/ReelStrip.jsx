import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { reels } from "@/data/products"

export default function ReelStrip() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
              As Seen On You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Worn & Loved</h2>
          </div>
          <p className="hidden md:block text-taupe max-w-xs text-right">
            Tag <span className="text-gold">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] overflow-hidden snap-start group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[reel-${reel.id}-cap] gold jewelry worn model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width={600}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <p
              id={`reel-${reel.id}-cap`}
              className="absolute bottom-5 left-5 right-5 font-serif text-ivory text-lg italic leading-snug"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
