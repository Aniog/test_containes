import { ugcMoments } from '@/data/catalog'
import { IMAGE_PLACEHOLDER } from '@/lib/placeholders'
import SectionHeading from '@/components/ui/SectionHeading'

const UgcReelSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Styled in real life"
          title="A reel-inspired glimpse of Velmora in motion"
          description="A scrollable strip of warm, vertical moments that mirrors the way our customers wear each piece."
        />

        <div className="mt-10 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none]">
          {ugcMoments.map((moment) => {
            const titleId = `${moment.id}-title`
            const captionId = `${moment.id}-caption`

            return (
              <article
                key={moment.id}
                className="group relative min-w-[240px] max-w-[240px] overflow-hidden rounded-[32px] bg-stone-100 shadow-[0_20px_50px_rgba(28,25,23,0.12)]"
              >
                <img
                  alt={moment.title}
                  className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  data-strk-img-id={`${moment.id}-image-2a1d`}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src={IMAGE_PLACEHOLDER}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-stone-50">
                  <h3 id={titleId} className="font-serif text-3xl leading-none">
                    {moment.title}
                  </h3>
                  <p id={captionId} className="mt-3 text-sm leading-6 text-stone-100">
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

export default UgcReelSection
