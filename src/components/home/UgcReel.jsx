import { PLACEHOLDER } from "@/components/ui/StrkImage"

const REELS = [
  {
    imgId: "reel-velmora-1a",
    titleId: "reel-title-1",
    descId: "reel-desc-1",
    caption: "Golden Sphere Huggies, every day",
    desc: "chunky gold dome huggie earrings worn on the ear",
  },
  {
    imgId: "reel-velmora-2b",
    titleId: "reel-title-2",
    descId: "reel-desc-2",
    caption: "Layered gold, soft light",
    desc: "delicate gold necklace layered on the neck warm light",
  },
  {
    imgId: "reel-velmora-3c",
    titleId: "reel-title-3",
    descId: "reel-desc-3",
    caption: "Vivid Aura ear cuff",
    desc: "gold ear cuff with crystal accent worn on the ear",
  },
  {
    imgId: "reel-velmora-4d",
    titleId: "reel-title-4",
    descId: "reel-desc-4",
    caption: "Amber Lace in motion",
    desc: "textured gold filigree drop earrings on the ear",
  },
  {
    imgId: "reel-velmora-5e",
    titleId: "reel-title-5",
    descId: "reel-desc-5",
    caption: "Flora Nectar, up close",
    desc: "multicolor floral crystal gold necklace on the collarbone",
  },
]

export default function UgcReel() {
  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              #VelmoraOnYou
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light text-ivory md:text-5xl">
              Worn & Loved
            </h2>
          </div>
          <p className="hidden max-w-xs font-sans text-sm text-ivory/60 md:block">
            Real moments, real wear. Tag us to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8">
        {REELS.map((reel) => (
          <article
            key={reel.imgId}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-ink sm:w-[260px] md:w-[300px]"
          >
            <img
              alt={reel.caption}
              className="h-full w-full object-cover"
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src={PLACEHOLDER}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p
                id={reel.titleId}
                className="font-serif text-lg italic text-ivory"
              >
                {reel.caption}
              </p>
              <p id={reel.descId} className="sr-only">
                {reel.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
