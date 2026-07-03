import { useStrkImages } from "@/hooks/useStrkImages"

const REELS = [
  {
    id: "reel-1",
    imgId: "reel-ear-cuff-1a2b",
    caption: "Stacked huggies, golden hour",
    query: "gold ear cuff jewelry worn on ear close up",
  },
  {
    id: "reel-2",
    imgId: "reel-necklace-3c4d",
    caption: "The floral pendant, caught in light",
    query: "gold crystal necklace worn on neck close up",
  },
  {
    id: "reel-3",
    imgId: "reel-huggies-5e6f",
    caption: "Everyday dome huggies",
    query: "gold dome huggie earrings worn on ear",
  },
  {
    id: "reel-4",
    imgId: "reel-filigree-7a8b",
    caption: "Filigree that moves with you",
    query: "gold filigree drop earrings worn on ear",
  },
  {
    id: "reel-5",
    imgId: "reel-set-9c0d",
    caption: "The gift set, unboxed",
    query: "gold jewelry gift box set necklace earrings",
  },
  {
    id: "reel-6",
    imgId: "reel-layer-1e2f",
    caption: "Layered gold, soft light",
    query: "layered gold necklaces worn on neck warm",
  },
]

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section className="py-20 md:py-28 bg-cream-soft">
      <div className="mx-auto max-w-8xl px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              On You, In Real Life
            </h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Tag <span className="text-ink">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar overflow-x-auto pb-4"
      >
        <div className="flex gap-4 md:gap-6 px-5 md:px-8">
          {REELS.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] overflow-hidden bg-ink group"
            >
              <img
                src={PLACEHOLDER}
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={reel.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-serif italic text-cream text-lg leading-snug">
                  {reel.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
