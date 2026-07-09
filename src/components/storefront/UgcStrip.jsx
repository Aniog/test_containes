import { UGC_ITEMS } from '@/data/products.js'

const UgcStrip = () => (
  <section className="overflow-hidden px-4 py-16 sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Velmora worn in motion</p>
          <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">A reels-inspired glimpse into everyday glow</h2>
        </div>
        <p className="hidden max-w-md text-sm leading-7 text-ink-soft md:block">
          Captured like a saved series of moments: close crops, warm skin tones, and jewelry styled as part of a lived-in wardrobe.
        </p>
      </div>

      <div className="flex snap-x gap-4 overflow-x-auto pb-4">
        {UGC_ITEMS.map((item) => {
          const titleId = `${item.id}-title`
          const subtitleId = `${item.id}-subtitle`

          return (
            <article
              key={item.id}
              className="group relative min-w-[260px] snap-start overflow-hidden rounded-[28px] border border-champagne/30 bg-espresso text-ivory shadow-soft sm:min-w-[290px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  data-strk-img-id={`${item.id}-portrait-9x16`}
                  data-strk-img={`[${subtitleId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 id={titleId} className="font-serif text-2xl leading-tight text-ivory">
                  {item.title}
                </h3>
                <p id={subtitleId} className="mt-2 text-sm leading-6 text-ivory/78">
                  {item.subtitle}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default UgcStrip
