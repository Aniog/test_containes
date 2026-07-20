import { ugcCards } from '../../lib/products'

export default function UGCSection() {
  return (
    <section className="bg-ink py-16 text-white md:py-20">
      <div className="page-shell">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/60">Seen on her</p>
            <h2 id="ugc-title" className="mt-4 font-display text-4xl text-white md:text-5xl">
              A reel-style look at the Velmora glow
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-7 text-white/70 md:block">
            Editorial, warm, and effortlessly wearable — the kind of pieces she
            never has to overthink.
          </p>
        </div>

        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2">
          {ugcCards.map((card) => (
            <article
              key={card.id}
              className="group relative min-w-[15rem] snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 sm:min-w-[18rem]"
            >
              <div className="sr-only">
                <h3 id={card.titleId}>{card.title}</h3>
                <p id={card.descId}>{card.description}</p>
              </div>
              <div className="aspect-[9/16] overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={card.title}
                  data-strk-img-id={card.imgId}
                  data-strk-img={`[${card.descId}] [${card.titleId}] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  className="h-full w-full object-cover transition duration-500 ease-luxe group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent px-5 pb-6 pt-20">
                <p className="font-display text-2xl leading-tight text-white">
                  {card.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
