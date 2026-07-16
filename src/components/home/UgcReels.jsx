import { placeholderSvg, ugcCards } from '@/data/products'
import SectionHeading from './SectionHeading'

export default function UgcReels() {
  return (
    <section className="bg-velmora-ivory py-18 text-velmora-ink lg:py-24">
      <div className="velmora-container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading align="left" eyebrow="In the wild" title="Worn in Warm Light" text="A reel-style glimpse of the stacks, layers, and gifting moments Velmora was made for." />
          <p className="text-xs font-semibold uppercase tracking-nav text-velmora-clay">Swipe to explore</p>
        </div>
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4">
          {ugcCards.map((card) => (
            <article key={card.id} className="group relative aspect-reel w-56 shrink-0 snap-start overflow-hidden bg-velmora-linen shadow-soft sm:w-64">
              <img
                alt={card.title}
                className="image-fill transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={card.imgId}
                data-strk-img={`[${card.id}-caption] [${card.id}-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={placeholderSvg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-velmora-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
                <h3 id={`${card.id}-title`} className="font-serif text-2xl leading-tight">{card.title}</h3>
                <p id={`${card.id}-caption`} className="mt-2 text-xs leading-5 text-velmora-linen">{card.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
