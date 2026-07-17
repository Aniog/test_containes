import SectionHeading from '@/components/common/SectionHeading'
import { imagePlaceholder } from '@/data/store'

const HomeUGCRow = ({ moments }) => {
  return (
    <section className="bg-velmora-mist py-16 md:py-24">
      <div className="page-shell space-y-10">
        <SectionHeading
          eyebrow="Styled in real life"
          title="Velmora in motion"
          description="An editorial, reels-inspired stream of everyday styling moments from our community."
        />
        <div className="-mx-5 overflow-x-auto px-5 md:-mx-8 md:px-8">
          <div className="flex min-w-max gap-5 pb-2">
            {moments.map((moment) => {
              const titleId = `ugc-${moment.id}-title`
              const descId = `ugc-${moment.id}-desc`
              return (
                <article
                  key={moment.id}
                  className="group relative w-[16.5rem] shrink-0 overflow-hidden rounded-[2rem] bg-velmora-ink shadow-soft md:w-[18rem]"
                >
                  <img
                    src={imagePlaceholder}
                    alt={moment.title}
                    className="h-[28rem] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                    data-strk-img-id={`ugc-card-${moment.id}`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-pearl">
                    <p className="mb-2 text-xs uppercase tracking-[0.35em] text-velmora-gold">
                      {moment.caption}
                    </p>
                    <h3 id={titleId} className="font-heading text-3xl leading-tight">
                      {moment.title}
                    </h3>
                    <p id={descId} className="mt-3 text-sm leading-6 text-velmora-pearl/80">
                      {moment.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeUGCRow
