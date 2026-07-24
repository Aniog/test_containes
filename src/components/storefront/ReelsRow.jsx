import { ugcMoments } from '@/data/storeData'
import SectionHeading from './SectionHeading'

const ReelsRow = () => {
  return (
    <section className="velmora-shell space-y-8 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Styled in real life"
        title="A reel of softly luminous moments"
        description="A scrollable edit of Velmora pieces worn from morning light to evening plans."
      />
      <div className="-mx-6 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        <div className="flex w-max gap-4 sm:gap-6">
          {ugcMoments.map((moment) => {
            const titleId = `${moment.id}-title`
            const descId = `${moment.id}-desc`
            return (
              <article
                key={moment.id}
                className="group relative w-[230px] overflow-hidden rounded-[2rem] border border-white/10 bg-velmora-cocoa shadow-velmora sm:w-[260px]"
              >
                <img
                  src=""
                  alt={moment.title}
                  className="aspect-[9/16] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  data-strk-img-id={`${moment.id}-reel-image`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-cocoa via-velmora-cocoa/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-ivory">
                  <p className="font-display text-3xl leading-none text-velmora-ivory">
                    {moment.caption}
                  </p>
                  <p id={titleId} className="mt-3 text-sm uppercase tracking-widest text-velmora-sand">
                    {moment.title}
                  </p>
                  <p id={descId} className="mt-2 text-sm leading-6 text-velmora-sand/90">
                    {moment.description}
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

export default ReelsRow
