import { ugcCards } from '@/data/products.js'

const UgcReel = () => (
  <section id="journal" className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-velmora text-velmora-gold">Worn by you</p>
          <h2 id="ugc-section-title" className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Quiet gold, in motion</h2>
        </div>
        <p id="ugc-section-desc" className="hidden max-w-sm text-sm leading-7 text-velmora-clay md:block">
          A reel-style glimpse at everyday styling: ear stacks, delicate chains, and golden gift moments.
        </p>
      </div>
      <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-3">
        {ugcCards.map((card) => (
          <article key={card.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-linen shadow-soft sm:w-64">
            <img
              alt={card.caption}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              data-strk-img-id={card.imgId}
              data-strk-img={`[${card.descId}] [${card.titleId}] [ugc-section-desc] [ugc-section-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-porcelain">
              <p id={card.titleId} className="font-serif text-2xl leading-tight text-velmora-porcelain">{card.caption}</p>
              <p id={card.descId} className="mt-2 text-xs leading-5 text-velmora-linen">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default UgcReel
