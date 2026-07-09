import { ugcMoments } from '@/data/products'
import SectionHeader from '@/components/common/SectionHeader'

const UgcStrip = () => {
  return (
    <section className="bg-stone-950 py-16 text-stone-50 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Seen on you"
          title="A reels-inspired styling edit"
          description="Warm-lit moments from the Velmora community, captured with the same refined ease as the jewelry itself."
          light
        />
      </div>
      <div className="mt-10 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-4">
          {ugcMoments.map((moment) => {
            const titleId = `${moment.id}-title`
            const descId = `${moment.id}-desc`

            return (
              <article
                key={moment.id}
                className="relative min-w-[220px] overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900 sm:min-w-[250px]"
              >
                <div className="relative aspect-[9/16] bg-stone-800">
                  <img
                    alt={moment.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`ugc-card-${moment.id}`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                    loading="lazy"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-amber-300">
                      Reels Edit
                    </p>
                    <h3 id={titleId} className="mt-3 font-display text-3xl leading-none text-stone-50">
                      {moment.title}
                    </h3>
                    <p id={descId} className="mt-3 text-sm leading-6 text-stone-200">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UgcStrip
