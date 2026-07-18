import { ugcMoments } from '@/data/store.js'
import SectionHeading from '@/components/shared/SectionHeading.jsx'

function UgcSection() {
  return (
    <section className="bg-stone-950 py-16 text-stone-100 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="On Her"
          title="Styled like an intimate reel"
          description="A soft-scroll row of moments that show how Velmora lives on skin, silk, and candlelit evenings."
        />

        <div className="mt-12 flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ugcMoments.map((moment) => (
            <article
              key={moment.id}
              className="group relative min-w-[15rem] overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:min-w-[18rem]"
            >
              <div className="aspect-[9/16]">
                <img
                  alt={moment.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  data-strk-img-id={moment.imageId}
                  data-strk-img={`[${moment.descId}] [${moment.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent px-5 pb-6 pt-16">
                <h3
                  id={moment.titleId}
                  className="font-display text-3xl text-stone-100"
                >
                  {moment.title}
                </h3>
                <p id={moment.descId} className="mt-2 text-sm leading-7 text-stone-300">
                  {moment.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UgcSection
