import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const REELS = [
  {
    id: "reel-ear-stack-1",
    query: "gold ear stack hoops jewelry on ear close-up portrait",
    handle: "@noor.styles",
    caption: "The every-day stack",
  },
  {
    id: "reel-necklace-1",
    query: "delicate gold necklace portrait woman soft warm lighting",
    handle: "@aimee.daily",
    caption: "Layered, not loud",
  },
  {
    id: "reel-huggies-1",
    query: "gold huggie earrings portrait natural light editorial",
    handle: "@mila.on.mornings",
    caption: "Morning gold",
  },
  {
    id: "reel-set-1",
    query: "gift jewelry box necklace earrings editorial warm tones",
    handle: "@with.lovemore",
    caption: "Gifting season",
  },
  {
    id: "reel-cuff-1",
    query: "gold ear cuff crystal portrait warm beige background",
    handle: "@saoirse.sundays",
    caption: "Sunday sparkle",
  },
  {
    id: "reel-drop-1",
    query: "gold filigree drop earrings on model editorial portrait",
    handle: "@isla.wears",
    caption: "Soft, considered",
  },
  {
    id: "reel-twinset-1",
    query: "matching gold necklace earrings set portrait woman warm",
    handle: "@thevelvet.notes",
    caption: "Quiet twins",
  },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section ref={containerRef} className="bg-ivory-soft py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="eyebrow">Worn by you</span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl text-espresso tracking-tight">
              From Our Community
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted max-w-md">
            Real quiet moments, captured by our wearers. Tag <span className="text-espresso">@velmora</span> for a chance to be featured.
          </p>
        </div>
      </div>

      <div
        className="no-scrollbar flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-10 pb-2 snap-x snap-mandatory"
        aria-label="Customer Reels"
      >
        {REELS.map((reel, idx) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[68vw] sm:w-[260px] md:w-[280px] aspect-[9/16] snap-start overflow-hidden bg-espresso-deep group"
          >
            <img
              data-strk-img-id={reel.id}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              alt={`${reel.handle} — ${reel.caption}`}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
            {/* Soft bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/85 via-espresso-deep/15 to-transparent" />
            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <p className="font-serif text-2xl md:text-3xl text-ivory leading-tight">
                {reel.caption}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-gold-soft">
                {reel.handle}
              </p>
            </div>
            {/* Reel index tag — mimics Reels carousel indicator */}
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-espresso-deep/60 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-ivory/90">
              <span className="h-1 w-1 rounded-full bg-gold" />
              Reel {String(idx + 1).padStart(2, "0")}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}