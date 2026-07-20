import { reels } from "@/data/products"
import { resolveStrkImgUrl } from "@/lib/strkImg"

export default function ReelsStrip() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-champagne mb-3">
              As Seen On You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory">
              Worn & Loved
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-dark max-w-xs text-right">
            Tag @velmora for a chance to be featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-5 md:px-8 pb-2 snap-x snap-mandatory">
        {reels.map((reel) => {
          const src = resolveStrkImgUrl(`${reel.imgId}-reel`)
          return (
            <article
              key={reel.id}
              className="relative h-[460px] w-[260px] flex-shrink-0 snap-start overflow-hidden bg-ink-soft"
            >
              <img
                alt={reel.caption}
                src={src}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-ivory leading-snug">
                {reel.caption}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
