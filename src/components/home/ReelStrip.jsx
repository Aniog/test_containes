import { useStrkImages } from "@/lib/useStrkImages"

const REELS = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, everyday gold.",
    imgId: "reel-ear-huggie-1a",
    titleId: "reel-1-title",
  },
  {
    id: "reel-2",
    caption: "Vivid Aura ear cuff, styled up.",
    imgId: "reel-ear-cuff-2b",
    titleId: "reel-2-title",
  },
  {
    id: "reel-3",
    caption: "Majestic Flora, layered at the neck.",
    imgId: "reel-neck-flora-3c",
    titleId: "reel-3-title",
  },
  {
    id: "reel-4",
    caption: "Amber Lace drops, golden hour.",
    imgId: "reel-ear-lace-4d",
    titleId: "reel-4-title",
  },
  {
    id: "reel-5",
    caption: "Royal Heirloom, the gift moment.",
    imgId: "reel-gift-heirloom-5e",
    titleId: "reel-5-title",
  },
  {
    id: "reel-6",
    caption: "Stacked gold, worn together.",
    imgId: "reel-stack-gold-6f",
    titleId: "reel-6-title",
  },
]


export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-champagne">
            As Worn By You
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">
            #VelmoraMoments
          </h2>
        </div>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8">
        {REELS.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[230px] flex-shrink-0 snap-start overflow-hidden bg-ink md:w-[280px]"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-0 left-0 right-0 p-5 font-serif text-lg italic leading-snug text-ivory"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
