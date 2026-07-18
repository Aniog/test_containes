import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PLACEHOLDER } from "@/context/CartContext"
import { resolveImgUrl } from "@/lib/utils"

const REELS = [
  {
    id: "reel-1",
    imgId: "reel-1-img-3a7b",
    titleId: "reel-1-title-3a7b",
    caption: "Golden Sphere Huggies, all day.",
    query: "gold huggie hoop earrings worn on ear close up",
  },
  {
    id: "reel-2",
    imgId: "reel-2-img-5c1d",
    titleId: "reel-2-title-5c1d",
    caption: "Layered gold, lived in.",
    query: "gold layered necklace worn on neck warm editorial",
  },
  {
    id: "reel-3",
    imgId: "reel-3-img-9e2f",
    titleId: "reel-3-title-9e2f",
    caption: "The everyday ear stack.",
    query: "gold ear cuff and studs stacked on ear",
  },
  {
    id: "reel-4",
    imgId: "reel-4-img-2b8a",
    titleId: "reel-4-title-2b8a",
    caption: "Flora, caught in light.",
    query: "floral crystal gold necklace worn close up warm",
  },
  {
    id: "reel-5",
    imgId: "reel-5-img-7d4c",
    titleId: "reel-5-title-7d4c",
    caption: "Filigree that moves with you.",
    query: "gold filigree drop earrings worn warm editorial",
  },
]

export default function ReelsRow() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">As Worn</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">Loved in Real Life</h2>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto px-6 md:px-10">
        <div className="flex gap-5 md:gap-6 pb-4 mx-auto max-w-7xl">
          {REELS.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[280px] aspect-[9x16] overflow-hidden bg-espresso group"
            >
              <img
                alt={reel.caption}
                src={resolveImgUrl(reel.imgId) || PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-cream text-xl italic leading-snug"
              >
                {reel.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
