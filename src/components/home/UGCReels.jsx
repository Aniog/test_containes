import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const reels = [
  { id: "ugc-1", caption: "Golden hour essentials" },
  { id: "ugc-2", caption: "Layered for brunch" },
  { id: "ugc-3", caption: "Wedding guest ready" },
  { id: "ugc-4", caption: "Everyday huggies" },
  { id: "ugc-5", caption: "Gift-worthy moments" },
  { id: "ugc-6", caption: "Date night sparkle" },
  { id: "ugc-7", caption: "Minimal but make it luxe" },
]

export function UGCReels() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, ref.current)
    return () => {
      if (typeof cleanup === "function") cleanup()
    }
  }, [])

  return (
    <section ref={ref} className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-center text-xs uppercase tracking-[0.22em] text-primary">
          @velmorajewelry
        </p>
        <h2 className="mb-12 text-center font-serif text-3xl font-medium text-foreground sm:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 sm:gap-6 sm:px-6 lg:px-8">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative aspect-[9/16] w-[170px] flex-shrink-0 overflow-hidden rounded-md sm:w-[220px]"
          >
            <img
              data-strk-img-id={reel.id}
              data-strk-img={`[${reel.id}-caption]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p
              id={`${reel.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-base italic text-white"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
