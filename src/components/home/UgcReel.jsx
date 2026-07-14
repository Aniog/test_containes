import { useEffect, useRef } from "react"

const reels = [
  {
    id: "ugc-1",
    caption: "Wearing the Golden Sphere huggies — my new everyday",
    handle: "@noor.k",
    imgId: "ugc-reel-1-c8a1",
    query: "young woman wearing small gold huggie earrings, soft natural light, warm tone",
  },
  {
    id: "ugc-2",
    caption: "Flora Nectar, layer two — soft and warm",
    handle: "@maya.r",
    imgId: "ugc-reel-2-c8a1",
    query: "layered gold floral crystal necklace worn by woman, warm soft light",
  },
  {
    id: "ugc-3",
    caption: "Royal Heirloom set, gifted to my sister",
    handle: "@eline.j",
    imgId: "ugc-reel-3-c8a1",
    query: "elegant gold jewelry gift set earring and necklace worn by woman, warm tone",
  },
  {
    id: "ugc-4",
    caption: "Vivid Aura — the cuff that moves with me",
    handle: "@sasha.w",
    imgId: "ugc-reel-4-c8a1",
    query: "woman wearing gold ear cuff with crystal accent, warm soft light",
  },
  {
    id: "ugc-5",
    caption: "Slow mornings in the Amber Lace drops",
    handle: "@june.h",
    imgId: "ugc-reel-5-c8a1",
    query: "woman wearing gold filigree drop earrings, soft warm morning light",
  },
  {
    id: "ugc-6",
    caption: "First gold piece I've kept on all day",
    handle: "@leah.m",
    imgId: "ugc-reel-6-c8a1",
    query: "woman wearing gold huggie earrings all day, warm soft portrait light",
  },
]

export default function UgcReel() {
  const ref = useRef(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const mod = await import("@strikingly/sdk")
        const cfgMod = await import("@/strk-img-config.json")
        if (cancelled) return
        if (mod?.ImageHelper?.loadImages) {
          mod.ImageHelper.loadImages(cfgMod.default || cfgMod, ref.current)
        }
      } catch (e) {}
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section
      ref={ref}
      className="border-y border-hairline bg-sand py-20 md:py-24"
    >
      <div className="container-x">
        <div className="flex flex-col items-baseline justify-between gap-3 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">From Our Community</span>
            <h2
              id="home-ugc-title"
              className="h-section mt-3 text-4xl text-espresso md:text-5xl"
            >
              Worn by you
            </h2>
          </div>
          <p className="max-w-xs text-sm text-taupe">
            Tag <span className="text-espresso">@velmora</span> for a chance to be
            featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto px-6 pb-4 md:gap-6 md:px-10">
        {reels.map((r) => (
          <article
            key={r.id}
            className="group relative aspect-[9/16] w-[200px] flex-shrink-0 overflow-hidden bg-espresso md:w-[260px]"
          >
            <img
              alt={r.caption}
              data-strk-img-id={r.imgId}
              data-strk-img={`[${r.id}-cap] ${r.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="540"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(31,26,20,0.0) 45%, rgba(31,26,20,0.75) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-4 text-ivory">
              <p
                id={`${r.id}-cap`}
                className="font-serif text-base leading-snug md:text-lg"
              >
                {r.caption}
              </p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.22em] text-ivory/80">
                {r.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
