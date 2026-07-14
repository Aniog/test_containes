import { ugcMoments } from '@/data/products'
import SectionHeader from '@/components/shared/SectionHeader'

export default function UgcStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-8 flex items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Seen On"
          title="Real-life shine, styled with ease"
          description="A reel-inspired stream of warm, wearable moments from morning layering to polished evening gifting."
        />
      </div>

      <div className="flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6">
        {ugcMoments.map((moment) => {
          const titleId = `${moment.id}-title`
          const captionId = `${moment.id}-caption`
          const imageId = `${moment.id}-image`

          return (
            <article
              key={moment.id}
              className="group relative min-w-[72%] snap-start overflow-hidden rounded-[2rem] bg-stone-950 sm:min-w-[45%] lg:min-w-[23%]"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={moment.title}
                className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                data-strk-img-id={imageId}
                data-strk-img={`[${captionId}] [${titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p
                  id={titleId}
                  className="font-serif text-3xl leading-none text-stone-50"
                >
                  {moment.title}
                </p>
                <p id={captionId} className="mt-3 text-sm leading-6 text-stone-200">
                  {moment.caption}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
