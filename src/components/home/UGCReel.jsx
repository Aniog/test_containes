import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const reels = [
  { id: "r1", caption: "Everyday gold moments" },
  { id: "r2", caption: "Styled with intention" },
  { id: "r3", caption: "Gift-worthy treasures" },
  { id: "r4", caption: "Layered in light" },
  { id: "r5", caption: "Delicate details" },
  { id: "r6", caption: "Made to last" },
]

export function UGCReel() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="bg-velmora-espresso py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-velmora-gold">
            @velmorajewelry
          </p>
          <h2 className="mt-2 font-serif text-3xl text-velmora-cream md:text-4xl">
            Styled by You
          </h2>
        </div>
      </div>

      <div
        ref={ref}
        className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 md:gap-6 md:px-8"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] overflow-hidden rounded-sm"
          >
            <img
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] gold jewelry on ear neck`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-velmora-cream"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
