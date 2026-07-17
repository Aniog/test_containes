import { ugcMoments } from '@/data/products'

export default function UgcReels() {
  return (
    <section className="overflow-hidden bg-velmora-cacao py-16 text-velmora-porcelain sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p id="ugc-eyebrow" className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">
              Seen in real light
            </p>
            <h2 id="ugc-title" className="mt-3 font-serif text-4xl text-velmora-porcelain sm:text-5xl">
              Worn, gifted, kept close
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-velmora-sand">
            A reel-style glimpse of Velmora pieces on ears, necklines, and golden-hour rituals.
          </p>
        </div>
      </div>

      <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
        {ugcMoments.map((moment) => (
          <article
            key={moment.id}
            className="group relative aspect-[9/16] min-w-[72vw] snap-start overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-soft sm:min-w-[310px]"
          >
            <img
              alt={moment.caption}
              className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
              data-strk-img-id={moment.imgId}
              data-strk-img={`[${moment.captionId}] [ugc-title] [ugc-eyebrow]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="520"
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-transparent to-transparent" />
            <p
              id={moment.captionId}
              className="absolute inset-x-5 bottom-6 font-serif text-2xl leading-tight text-velmora-porcelain"
            >
              {moment.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
