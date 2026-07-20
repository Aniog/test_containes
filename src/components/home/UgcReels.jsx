import { ugcCards } from '../../data/products'

export default function UgcReels() {
  return (
    <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Worn softly</p>
            <h2 id="ugc-title" className="font-serif text-5xl text-velmora-ivory md:text-6xl">Seen on Velmora</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-velmora-ivory/68">A reel-style glimpse of gold in motion, from morning stacks to evening glow.</p>
        </div>
      </div>
      <div className="flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[calc((100vw-80rem)/2+2rem)]">
        {ugcCards.map((card) => (
          <article key={card.id} className="group relative h-[470px] w-[264px] shrink-0 snap-start overflow-hidden bg-velmora-umber shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:h-[540px] sm:w-[304px]">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id={`reel-${card.id}`}
              data-strk-bg={`[reel-caption-${card.id}] [reel-title-${card.id}] [ugc-title]`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="700"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/88 via-velmora-espresso/15 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 id={`reel-title-${card.id}`} className="font-serif text-3xl leading-none text-velmora-ivory">{card.title}</h3>
              <p id={`reel-caption-${card.id}`} className="mt-3 text-sm leading-6 text-velmora-ivory/76">{card.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
