import { reels } from "@/data/products"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ReelStrip() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            As Worn By You
          </p>
          <h2 className="font-serif text-4xl font-light text-ink sm:text-5xl">
            #VelmoraMoments
          </h2>
        </div>
      </div>

      {/* Horizontal scroll of 9:16 cards */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[60vw] max-w-[230px] shrink-0 snap-start overflow-hidden bg-ink sm:w-[230px]"
          >
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              alt={reel.caption}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-ivory"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
