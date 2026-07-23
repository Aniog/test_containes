import { ugcCards } from '@/data/products'
import SectionHeader from './SectionHeader'

export default function UgcReel() {
  return (
    <section id="journal" className="bg-velmora-parchment px-5 py-16 text-velmora-espresso md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Worn quietly" title="Velmora in Real Light" copy="A soft reel of everyday styling moments, from first coffee to candlelit dinner." />
        <div className="flex snap-x gap-5 overflow-x-auto pb-3 scrollbar-none">
          {ugcCards.map((card) => (
            <article key={card.id} className="group relative aspect-[9/16] w-[72vw] max-w-[310px] shrink-0 snap-start overflow-hidden bg-velmora-espresso shadow-soft sm:w-[38vw] lg:w-[23vw]">
              <img
                alt={card.caption}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                data-strk-img-id={`ugc-reel-${card.id}`}
                data-strk-img={`[${card.descId}] [${card.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
                <h3 id={card.titleId} className="font-serif text-3xl font-semibold">{card.caption}</h3>
                <p id={card.descId} className="mt-2 text-sm leading-6 text-velmora-parchment">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
