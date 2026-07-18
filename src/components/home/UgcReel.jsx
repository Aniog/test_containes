import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const REELS = [
  {
    id: "reel-aurora",
    caption: "Golden Sphere Huggies, styled for everyday",
    imgId: "reel-aurora-img-1a2b3c",
    titleId: "reel-aurora-title",
  },
  {
    id: "reel-flora",
    caption: "Majestic Flora Nectar, caught in afternoon light",
    imgId: "reel-flora-img-4d5e6f",
    titleId: "reel-flora-title",
  },
  {
    id: "reel-amber",
    caption: "Amber Lace drops for an evening out",
    imgId: "reel-amber-img-7g8h9i",
    titleId: "reel-amber-title",
  },
  {
    id: "reel-vivid",
    caption: "Vivid Aura cuff, stacked along the ear",
    imgId: "reel-vivid-img-0j1k2l",
    titleId: "reel-vivid-title",
  },
  {
    id: "reel-heirloom",
    caption: "Royal Heirloom Set, a gift to remember",
    imgId: "reel-heirloom-img-3m4n5o",
    titleId: "reel-heirloom-title",
  },
  {
    id: "reel-glow",
    caption: "Warm gold, soft skin, golden hour",
    imgId: "reel-glow-img-6p7q8r",
    titleId: "reel-glow-title",
  },
]

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function UgcReel() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">
            As Worn By You
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
            #VelmoraMoments
          </h2>
        </div>
      </div>

      <div
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 md:px-10 pb-2"
      >
        {REELS.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink md:w-[260px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
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
