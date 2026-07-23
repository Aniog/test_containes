import { reels } from '@/data/products'
import { resolveStrkImageUrl } from '@/lib/strk-image'

export default function ReelsRow() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">On the Ear & Neck</h2>
          </div>
          <p className="hidden md:block text-sm text-muted max-w-xs text-right">
            Real moments, real wear. Tag <span className="text-gold">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[60vw] sm:w-[280px] aspect-[9/16] snap-start overflow-hidden bg-ink group"
          >
            <img
              alt={reel.caption}
              src={resolveStrkImageUrl(reel.imgId)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-0 left-0 right-0 p-5 font-serif text-xl text-cream italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
