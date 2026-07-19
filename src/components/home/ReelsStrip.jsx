import { useEffect, useRef } from "react"
import { reels } from "@/data/products"
import { Instagram } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ReelsStrip() {
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
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">
              Styled by You
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-gold transition-colors"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            @velmora
          </a>
        </div>
      </div>

      <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar px-6 md:px-10 pb-2 snap-x snap-mandatory">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[230px] md:w-[280px] aspect-[9/16] overflow-hidden bg-espresso snap-start group"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <div className="absolute top-4 right-4">
              <Instagram className="w-5 h-5 text-ivory/80" strokeWidth={1.5} />
            </div>
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-ivory text-lg leading-snug italic"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
