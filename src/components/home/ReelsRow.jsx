import { reels } from '@/data/products'
import { useStrkImages, PLACEHOLDER } from '@/hooks/useStrkImages'

export default function ReelsRow() {
  const ref = useStrkImages([])

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              On You
            </h2>
          </div>
          <p className="hidden md:block text-sm text-stone max-w-xs text-right">
            Real moments, real wear. Tag <span className="text-gold">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="no-scrollbar overflow-x-auto px-5 md:px-8 pb-2"
      >
        <div className="flex gap-4 md:gap-6 max-w-7xl mx-auto">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[60vw] sm:w-[280px] aspect-[9/16] overflow-hidden bg-espresso group"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry worn on ear and neck editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-0 left-0 right-0 p-5 font-serif text-ivory text-xl italic leading-snug"
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
