import SectionHeading from '@/components/shared/SectionHeading'
import { ugcMoments } from '@/lib/products'

export default function UgcStrip() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Worn in Real Life"
          title="A reel-style look at everyday radiance"
          description="Styled on skin, silk, and cashmere—capturing how Velmora lives beyond the product page."
        />

        <div className="mt-10 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ugcMoments.map((moment) => (
            <article
              key={moment.id}
              className="group relative min-w-[220px] max-w-[220px] overflow-hidden rounded-[2rem] bg-velmora-ink text-velmora-ivory shadow-velvet sm:min-w-[260px] sm:max-w-[260px]"
            >
              <div className="aspect-[9/16]">
                <img
                  alt={moment.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  data-strk-img-id={moment.imageId}
                  data-strk-img={`[${moment.descId}] [${moment.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/55 to-transparent px-5 pb-5 pt-16">
                <h3 id={moment.titleId} className="font-heading text-2xl text-velmora-ivory">
                  {moment.title}
                </h3>
                <p id={moment.descId} className="mt-2 text-sm leading-6 text-velmora-ivory/75">
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
