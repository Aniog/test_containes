import { reels } from "@/data/products"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ReelStrip() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
            As Worn By You
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            The Velmora Edit
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-6 px-6 md:px-10 pb-2">
          {reels.map((reel) => {
            const captionId = `reel-${reel.id}-caption`
            return (
              <div
                key={reel.id}
                className="relative shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden bg-ink group"
              >
                <img
                  alt={reel.caption}
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${captionId}] gold jewelry worn close up`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <p
                  id={captionId}
                  className="absolute bottom-5 left-5 right-5 font-serif text-cream text-lg leading-snug italic"
                >
                  {reel.caption}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
