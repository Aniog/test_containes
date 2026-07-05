import { useStockImages } from '@/hooks/useStockImages'
import SectionHeading from './SectionHeading'
import { ugcMoments } from '@/data/storeData'

export default function UgcReelSection() {
  const containerRef = useStockImages([])

  return (
    <section ref={containerRef} className="bg-velmora-ink py-20 text-velmora-soft sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Worn by Velmora"
          title="A reel-style row of real-life gold moments."
          description="Warm editorial styling with an effortless, personal feel — designed to echo a polished social scroll."
        />
        <div className="mt-10 flex gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ugcMoments.map((moment) => {
            const titleId = `ugc-${moment.id}-title`
            const captionId = `ugc-${moment.id}-caption`

            return (
              <article
                key={moment.id}
                className="group relative min-w-[16rem] flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-velmora sm:min-w-[18rem]"
              >
                <img
                  data-strk-img-id={`velmora-ugc-${moment.id}-reel`}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={moment.title}
                  className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/70 to-transparent p-5">
                  <p id={titleId} className="font-display text-2xl text-velmora-soft">
                    {moment.title}
                  </p>
                  <p id={captionId} className="mt-2 text-sm leading-6 text-velmora-soft/85">
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
