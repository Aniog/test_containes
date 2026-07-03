import { reels } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest2 text-gold-deep">@velmora</p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Worn by You</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted md:block">
            Real styling, real moments. Tag <span className="text-ink">#Velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-2 md:px-8"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden bg-ink md:w-[260px]"
          >
            <img
              src={PLACEHOLDER}
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-cream"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
