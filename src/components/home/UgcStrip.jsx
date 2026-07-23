import { placeholderSrc } from '@/lib/image-placeholders'

export default function UgcStrip({ cards }) {
  return (
    <section className="bg-velmora-espresso py-20 text-velmora-ivory md:py-24" id="journal">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Seen in motion</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ivory">Real ways to wear the glow.</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-7 text-velmora-champagne md:block">A reel-style strip of intimate close-ups, styling moments, and giftable shine.</p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-4">
          {cards.map((card) => {
            const captionId = `ugc-${card.id}-caption`
            return (
              <article key={card.id} className="group relative aspect-[9/16] w-[72vw] max-w-[260px] shrink-0 snap-center overflow-hidden bg-velmora-onyx shadow-velmora-deep sm:w-64">
                <img
                  alt={card.caption}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`ugc-strip-${card.id}`}
                  data-strk-img={`[${captionId}] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src={placeholderSrc}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-onyx/80 via-transparent to-transparent" />
                <p id={captionId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-none text-velmora-ivory">{card.caption}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
