import { ugcMoments } from '@/data/products'

const UgcRow = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.32em] text-velmora-mist">
          Worn in real life
        </p>
        <h2 className="font-display text-4xl text-velmora-ink md:text-5xl">
          A reel of luminous moments
        </h2>
      </div>
      <div className="-mx-5 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
        <div className="flex gap-4 sm:gap-6">
          {ugcMoments.map((moment) => {
            const titleId = `ugc-${moment.id}-title`
            const captionId = `ugc-${moment.id}-caption`

            return (
              <article
                key={moment.id}
                className="group relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[2rem] bg-velmora-cacao shadow-card sm:min-w-[260px] sm:max-w-[260px]"
              >
                <img
                  alt={moment.title}
                  className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  data-strk-img-id={moment.imageId}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="720"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/65 to-transparent px-5 pb-5 pt-16 text-velmora-parchment">
                  <p id={titleId} className="font-display text-3xl leading-none">
                    {moment.title}
                  </p>
                  <p id={captionId} className="mt-2 text-sm leading-6 text-velmora-champagne">
                    {moment.caption}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UgcRow
