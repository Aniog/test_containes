import { reels } from '@/data/products'
import StrkImage from '@/components/ui/StrkImage'

export default function ReelStrip() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
              As Worn By You
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              The Velmora Edit
            </h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Real moments, real wear. Tag <span className="text-ink">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div className="no-scrollbar overflow-x-auto pb-2">
        <div className="flex gap-4 md:gap-6 px-5 md:px-8 max-w-7xl mx-auto">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] bg-espresso overflow-hidden group"
            >
              <StrkImage
                imgId={reel.imgId}
                query={`[${reel.titleId}] gold jewelry worn close up warm editorial`}
                ratio="9x16"
                width="600"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-5 left-5 right-5 font-serif text-ivory text-xl leading-snug"
              >
                {reel.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
