import { ugcCards } from '@/data/products'

export default function UgcReels() {
  return (
    <section className="bg-velmora-champagne/65 py-16 text-velmora-espresso sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Seen in motion</p>
            <h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">Reel-style moments</h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-7 text-velmora-taupe md:block">
            Editorial glimpses of gold worn close: ear stacks, necklines, gift boxes, and glow.
          </p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-3 sm:gap-6">
          {ugcCards.map((card) => (
            <article key={card.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden bg-velmora-espresso shadow-soft sm:w-64">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                data-strk-bg-id={card.bgId}
                data-strk-bg={`[${card.id}-caption] [${card.id}-title]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
                <h3 id={`${card.id}-title`} className="font-serif text-2xl leading-tight">{card.title}</h3>
                <p id={`${card.id}-caption`} className="mt-2 text-xs leading-5 text-velmora-champagne">{card.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
