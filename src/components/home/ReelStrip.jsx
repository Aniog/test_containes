import { useRef, useEffect } from "react"
import { reels } from "@/data/products"
import { strkImgSrc } from "@/lib/images"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ReelStrip() {
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
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">As Seen On You</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">#VelmoraWorn</h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Real pieces, real wear. Tag us to be featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto pb-4">
        <div className="flex gap-4 md:gap-6 px-5 md:px-8">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[230px] md:w-[280px] aspect-[9/16] overflow-hidden bg-ink group"
            >
              <img
                alt={reel.caption}
                src={strkImgSrc(reel.imgId, 500)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-ivory text-lg md:text-xl italic leading-snug"
              >
                {reel.caption}
              </p>
              <span className="absolute top-4 right-4 text-ivory/70 text-[10px] uppercase tracking-widest3">
                Reel
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
