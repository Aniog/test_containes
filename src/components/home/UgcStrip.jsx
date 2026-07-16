import { ugcMoments } from '@/data/products.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'

const placeholderSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const UgcStrip = () => {
  return (
    <section className="bg-rose py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Velmora on you"
            title="A reels-inspired look at daily wear"
            description="Quiet moments, polished stacks, and warm gold tones captured in motion and soft light."
          />
        </div>
        <div className="flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ugcMoments.map((moment) => (
            <article
              key={moment.id}
              className="relative min-w-[220px] flex-1 overflow-hidden rounded-[2rem] border border-line bg-ink shadow-soft md:min-w-[260px]"
            >
              <img
                alt={moment.title}
                src={placeholderSrc}
                data-strk-img-id={moment.imageId}
                data-strk-img={`[${moment.captionId}] [${moment.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                className="aspect-[9/16] h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5">
                <p id={moment.titleId} className="font-display text-3xl text-ivory">
                  {moment.title}
                </p>
                <p id={moment.captionId} className="mt-2 text-sm leading-6 text-ivory/80">
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
