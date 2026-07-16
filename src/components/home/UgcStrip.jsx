import { ugcMoments } from '@/data/storefront'

const UgcStrip = () => {
  return (
    <section className="border-y border-velmora-line/80 bg-white/55 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold">As styled by our community</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-4xl text-velmora-ink md:text-5xl">
              Reel-style everyday moments
            </h2>
          </div>
        </div>

        <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-2">
          {ugcMoments.map((moment) => (
            <article
              key={moment.id}
              className="group relative min-w-[16rem] snap-start overflow-hidden rounded-[2rem] border border-velmora-line/80 bg-velmora-panel shadow-velmora-soft md:min-w-[18rem]"
            >
              <img
                alt={moment.caption}
                className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                data-strk-img-id={moment.imageId}
                data-strk-img={`[${moment.captionId}] [${moment.titleId}] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="640"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(23,20,19,0)_0%,rgba(23,20,19,0.86)_100%)] px-5 pb-6 pt-20 text-velmora-ivory">
                <p id={moment.titleId} className="text-xs uppercase tracking-[0.28em] text-velmora-mist">
                  Velmora Muse
                </p>
                <p id={moment.captionId} className="mt-3 font-serif text-2xl leading-tight text-velmora-ivory">
                  {moment.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UgcStrip
