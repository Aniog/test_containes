import { ugcMoments } from '../../data/products'
import { IMAGE_PLACEHOLDER } from '../../lib/utils'
import SectionHeading from '../shared/SectionHeading'

export default function UgcRow() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="section-frame overflow-hidden">
        <SectionHeading
          eyebrow="Velmora in Motion"
          title="Jewelry worn the way real mornings and real evenings demand"
          description="A reels-style glimpse into layered necklines, ear stacks, and gifting moments in soft editorial light."
          titleId="ugc-title"
        />

        <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-3 md:-mx-8 md:px-8 lg:-mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {ugcMoments.map((moment) => {
            const titleId = `${moment.id}-title`
            const descriptionId = `${moment.id}-description`

            return (
              <article
                key={moment.id}
                className="group relative min-w-[72vw] snap-start overflow-hidden rounded-[30px] bg-velmora-ink shadow-float sm:min-w-[44vw] lg:min-w-0"
              >
                <img
                  alt={moment.title}
                  className="aspect-[9/16] w-full object-cover transition-transform duration-700 ease-velvet group-hover:scale-[1.04]"
                  data-strk-img-id={`${moment.id}-img`}
                  data-strk-img={`[${descriptionId}] [${titleId}] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src={IMAGE_PLACEHOLDER}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-parchment md:p-6">
                  <p id={titleId} className="font-display text-3xl leading-none text-velmora-parchment">
                    {moment.title}
                  </p>
                  <p id={descriptionId} className="mt-3 text-sm leading-6 text-velmora-parchment/80">
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
