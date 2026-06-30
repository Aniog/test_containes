import ImageLoader, { PLACEHOLDER } from "@/components/ImageLoader"

const REELS = [
  { id: "r1", caption: "Golden Sphere Huggies, everyday", imgId: "reel-1-velmora-a1" },
  { id: "r2", caption: "Stacked ear, Vivid Aura cuff", imgId: "reel-2-velmora-a2" },
  { id: "r3", caption: "Majestic Flora, layered", imgId: "reel-3-velmora-a3" },
  { id: "r4", caption: "Amber Lace, golden hour", imgId: "reel-4-velmora-a4" },
  { id: "r5", caption: "Royal Heirloom, gifted", imgId: "reel-5-velmora-a5" },
  { id: "r6", caption: "Solene Arc, on the ear", imgId: "reel-6-velmora-a6" },
]

export default function UgcReels() {
  return (
    <ImageLoader as="section" className="bg-sand py-20 md:py-28" deps={[]}>
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">As Worn by You</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">#VelmoraMoments</h2>
        </div>
      </div>

      <div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto px-6 md:px-10 pb-4 snap-x">
        {REELS.map((r) => (
          <div
            key={r.id}
            className="relative h-[440px] w-[248px] shrink-0 snap-start overflow-hidden bg-ink"
          >
            <img
              alt={r.caption}
              data-strk-img-id={r.imgId}
              data-strk-img={`[reel-${r.id}-caption] gold jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={`reel-${r.id}-caption`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
            >
              {r.caption}
            </p>
          </div>
        ))}
      </div>
    </ImageLoader>
  )
}
