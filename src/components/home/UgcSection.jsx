import { ugcMoments } from '@/data/products'
import SectionHeading from '@/components/ui/SectionHeading'
import { getStrkImageSrc } from '@/lib/strkImage'

function UgcSection() {
  return (
    <section className="border-y border-stone-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Worn in Real Life"
          title="A reel-style edit of Velmora in motion."
          description="Soft glow, layered styling, and those close-up moments that make a favorite piece feel personal."
        />

        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-3">
          {ugcMoments.map((moment) => {
            const titleId = `ugc-${moment.id}-title`
            const descId = `ugc-${moment.id}-desc`

            return (
              <article
                key={moment.id}
                className="group relative min-w-[260px] snap-start overflow-hidden rounded-[2rem] bg-stone-950 sm:min-w-[300px]"
              >
                <img
                  src={getStrkImageSrc(moment.imageId)}
                  alt={moment.caption}
                  className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                  data-strk-img-id={moment.imageId}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-stone-50">
                  <p id={titleId} className="font-serif-display text-2xl">
                    {moment.caption}
                  </p>
                  <p id={descId} className="mt-2 text-sm leading-6 text-stone-200">
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

export default UgcSection
