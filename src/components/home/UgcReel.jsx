import { useStrkImages } from "@/hooks/useStrkImages"

const reels = [
  {
    id: "reel-1",
    imgId: "reel-1-a8f3",
    titleId: "reel-1-title",
    descId: "reel-1-desc",
    title: "Everyday Gold",
    desc: "Golden Sphere Huggies worn on the lobe",
  },
  {
    id: "reel-2",
    imgId: "reel-2-b2c1",
    titleId: "reel-2-title",
    descId: "reel-2-desc",
    title: "Worn at Dusk",
    desc: "Amber Lace Earrings catching the light",
  },
  {
    id: "reel-3",
    imgId: "reel-3-c9d4",
    titleId: "reel-3-title",
    descId: "reel-3-desc",
    title: "The Gift Set",
    desc: "Royal Heirloom Set on the neckline",
  },
  {
    id: "reel-4",
    imgId: "reel-4-d1e7",
    titleId: "reel-4-title",
    descId: "reel-4-desc",
    title: "Studio Light",
    desc: "Vivid Aura ear cuff styled up close",
  },
  {
    id: "reel-5",
    imgId: "reel-5-e5f2",
    titleId: "reel-5-title",
    descId: "reel-5-desc",
    title: "Flora in Bloom",
    desc: "Majestic Flora Nectar pendant on skin",
  },
  {
    id: "reel-6",
    imgId: "reel-6-f7a9",
    titleId: "reel-6-title",
    descId: "reel-6-desc",
    title: "Layered & Warm",
    desc: "Gold necklaces layered on the collarbone",
  },
]

export default function UgcReel() {
  const ref = useStrkImages([])

  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
            As Worn By You
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">
            #VelmoraMoments
          </h2>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:px-10"
      >
        {reels.map((r) => (
          <article
            key={r.id}
            className="relative aspect-[9/16] w-[230px] shrink-0 snap-start overflow-hidden bg-espresso-soft md:w-[260px]"
          >
            <img
              alt={r.title}
              data-strk-img-id={r.imgId}
              data-strk-img={`[${r.descId}] [${r.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p
                id={r.titleId}
                className="font-serif text-xl text-ivory"
              >
                {r.title}
              </p>
              <p id={r.descId} className="mt-1 text-xs text-ivory/70">
                {r.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
