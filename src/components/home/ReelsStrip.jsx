import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/hooks/useReveal"

const REELS = [
  {
    id: "reel-1",
    handle: "@maya.studios",
    caption: "Morning gold",
    query: "gold huggie hoops on ear morning light close up portrait",
    imgId: "reel-1-img-91a3b2",
  },
  {
    id: "reel-2",
    handle: "@elena.velvet",
    caption: "Worn daily",
    query: "gold crystal necklace on neck editorial warm portrait",
    imgId: "reel-2-img-44f8c1",
  },
  {
    id: "reel-3",
    handle: "@june.made",
    caption: "Layered, never loud",
    query: "two layered gold necklaces on neck editorial portrait warm",
    imgId: "reel-3-img-2b9d7e",
  },
  {
    id: "reel-4",
    handle: "@aria.notes",
    caption: "My everyday huggies",
    query: "gold huggie earrings on ear close up editorial portrait",
    imgId: "reel-4-img-7c401f",
  },
  {
    id: "reel-5",
    handle: "@noor.linen",
    caption: "Stacked in gold",
    query: "stack of gold rings on hand editorial warm portrait",
    imgId: "reel-5-img-a0e3d8",
  },
  {
    id: "reel-6",
    handle: "@sofia.muse",
    caption: "A little ritual",
    query: "gold pendant necklace on necklace editorial warm portrait",
    imgId: "reel-6-img-31c2a9",
  },
  {
    id: "reel-7",
    handle: "@parker.elle",
    caption: "Cuffs, not clips",
    query: "gold ear cuff on ear editorial portrait warm close up",
    imgId: "reel-7-img-5d72e4",
  },
]

function ReelCard({ reel }) {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <div
      ref={ref}
      className="relative flex-shrink-0 w-[220px] sm:w-[240px] md:w-[260px] aspect-[9/16] overflow-hidden bg-umber snap-start"
    >
      <div className="absolute inset-0">
        <img
          alt={reel.caption}
          data-strk-img-id={reel.imgId}
          data-strk-img={reel.query}
          data-strk-img-ratio="9x16"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
          className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
        />
      </div>
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85" />
      {/* Bottom caption */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-serif italic text-bone text-[20px] leading-snug">
          {reel.caption}
        </p>
        <p className="mt-2 text-[11px] tracking-widest2 uppercase text-bone/70">
          {reel.handle}
        </p>
      </div>
    </div>
  )
}

export default function ReelsStrip() {
  const [ref, visible] = useReveal()
  return (
    <section
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} bg-ink-soft text-bone`}
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p
              id="reels-eyebrow"
              className="text-[11px] tracking-widest3 uppercase text-bone/60"
            >
              Worn by you
            </p>
            <h2
              id="reels-title"
              className="mt-3 font-serif text-[36px] md:text-[48px] leading-[1.05]"
            >
              In the wild
            </h2>
          </div>
          <p
            id="reels-sub"
            className="text-[14px] text-bone/70 max-w-sm"
          >
            Tag <span className="text-gold">@velmora.jewelry</span> to be
            featured.
          </p>
        </div>

        <div className="-mx-6 px-6 md:-mx-10 md:px-10 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {REELS.map((r) => (
            <ReelCard key={r.id} reel={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
