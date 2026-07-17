import { ugcMoments } from '@/data/products'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function UGCRow() {
  return (
    <section className="bg-velmora-espresso py-20 text-velmora-pearl lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Seen in the ritual</p>
            <h2 id="ugc-title" className="font-serif text-4xl text-velmora-pearl sm:text-5xl">Reel-worthy radiance</h2>
          </div>
          <p id="ugc-subtitle" className="max-w-md text-sm leading-7 text-velmora-porcelain/75">
            A soft scroll of real-life styling moments, from morning huggies to candlelit chains.
          </p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-3">
          {ugcMoments.map((moment) => (
            <article key={moment.id} className="group relative aspect-[9/16] min-w-[15rem] snap-center overflow-hidden rounded-[1.75rem] bg-velmora-oxblood shadow-velmora-card sm:min-w-[18rem]">
              <img
                alt={moment.caption}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-${moment.id}`}
                data-strk-img={`[ugc-${moment.id}-desc] [ugc-${moment.id}-caption] [ugc-subtitle] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p id={`ugc-${moment.id}-caption`} className="font-serif text-2xl text-velmora-pearl">{moment.caption}</p>
                <p id={`ugc-${moment.id}-desc`} className="sr-only">{moment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
