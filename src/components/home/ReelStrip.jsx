import { reels } from '@/data/products'
import { resolveImageUrl } from '@/lib/resolveImage'

export default function ReelStrip() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-8xl px-6 md:px-10 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">As Worn</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">On the Community</h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Real wear, real light. Tag <span className="text-gold">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-10 pb-4 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9x16] snap-start overflow-hidden bg-sand group"
          >
            <img
              alt={reel.title}
              src={resolveImageUrl(reel.imgId)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p id={reel.titleId} className="sr-only">
                {reel.title}
              </p>
              <p className="font-serif text-lg text-ivory italic leading-snug">
                {reel.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
