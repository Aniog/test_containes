import { reels } from '@/data/products'
import { useImageLoader } from '@/lib/useImageLoader'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ReelStrip() {
  const ref = useImageLoader([])

  return (
    <section ref={ref} className="bg-sand py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              #VelmoraMoments
            </h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Tag us to be featured. Real pieces, real wear, golden hour.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-10 pb-4 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[230px] md:w-[260px] aspect-[9/16] snap-start overflow-hidden bg-ink group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-cream text-lg leading-snug"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
