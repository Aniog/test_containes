import SectionHeading from '@/components/ui/SectionHeading'
import { placeholderSrc } from '@/data/storefront'
import { ugcMoments } from '@/data/products'

const UgcStrip = () => (
  <section className="section-space bg-stone-100/70">
    <div className="page-shell">
      <SectionHeading
        eyebrow="Styled in Real Life"
        title="An editorial take on your everyday stack."
        description="Scroll the moments our community keeps reaching for — warm layers, polished huggies, and easy gifting cues."
      />
      <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-3">
        {ugcMoments.map((moment) => (
          <article
            key={moment.id}
            className="group relative min-w-[240px] snap-start overflow-hidden rounded-[2rem] border border-stone-200 bg-neutral-950 shadow-sm shadow-stone-200/40 sm:min-w-[280px]"
          >
            <img
              src={placeholderSrc}
              alt={moment.caption}
              data-strk-img-id={moment.imageId}
              data-strk-img={`[${moment.captionId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="700"
              className="aspect-[9/16] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/15 to-transparent" />
            <p id={moment.captionId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-tight text-stone-50">
              {moment.caption}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default UgcStrip
