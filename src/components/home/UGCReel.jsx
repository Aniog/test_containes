import { imagePlaceholder } from '../../data/products.js'

const moments = [
  { id: 'morning', title: 'morning gold', caption: 'A soft stack for first light.' },
  { id: 'dinner', title: 'dinner shimmer', caption: 'Huggies that glow after dark.' },
  { id: 'gift', title: 'gift reveal', caption: 'Her new favorite little box.' },
  { id: 'neckline', title: 'silk neckline', caption: 'Florals against warm satin.' },
  { id: 'weekend', title: 'weekend polish', caption: 'Gold made beautifully easy.' },
]

export default function UGCReel() {
  return (
    <section id="journal" className="bg-velmora-pearl py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-bronze">Seen on Velmora</p>
            <h2 className="mt-4 font-serif text-5xl text-velmora-ink md:text-6xl">Real light, real rituals</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-mist">A reel-inspired row of intimate styling moments: close, warm, effortless, and made for saving.</p>
        </div>
      </div>
      <div className="mt-10 flex snap-x gap-5 overflow-x-auto px-5 pb-3 md:px-8 lg:px-[calc((100vw-80rem)/2+2rem)]">
        {moments.map((moment) => {
          const titleId = `ugc-${moment.id}-title`
          const captionId = `ugc-${moment.id}-caption`
          return (
            <article key={moment.id} className="group relative aspect-[9/16] w-56 flex-none snap-start overflow-hidden rounded-t-full bg-velmora-linen shadow-soft md:w-72">
              <img
                alt={moment.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={`velmora-ugc-${moment.id}`}
                data-strk-img={`[${captionId}] [${titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="650"
                src={imagePlaceholder}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink/80 to-transparent p-5 pt-16 text-velmora-pearl">
                <p id={titleId} className="text-xs uppercase tracking-[0.3em] text-velmora-champagne">{moment.title}</p>
                <p id={captionId} className="mt-2 font-serif text-2xl leading-6 text-velmora-pearl">{moment.caption}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
