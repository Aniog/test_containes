import { reels } from '@/data/products'
import { useStrkImages, StrkImg } from '@/components/StrkImage'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ReelStrip() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">As Seen On You</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Worn & Loved</h2>
          </div>
          <p className="hidden md:block text-sm text-sand max-w-xs text-right">
            Tag <span className="text-ink">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div
        className="flex gap-4 overflow-x-auto no-scrollbar px-5 md:px-8 pb-2 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] overflow-hidden bg-espresso snap-start group"
          >
            <StrkImg
              imgId={reel.imgId}
              query={`[${reel.titleId}] gold jewelry worn model editorial`}
              ratio="9x16"
              width={400}
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5">
              <p
                id={reel.titleId}
                className="font-serif italic text-ivory text-lg leading-snug"
              >
                {reel.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
