import { getStrkImageUrl, ugcMoments } from '@/data/store'
import SectionHeading from '@/components/shared/SectionHeading'

const UgcStrip = () => (
  <section className="border-y border-stone-200 bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Worn on repeat"
        title="A reel-style glimpse at Velmora in real life."
        description="Layered necklines, sculptural ears, and gift-ready moments captured with a soft editorial finish."
      />

      <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ugcMoments.map((moment) => {
          const titleId = `${moment.id}-title`
          const captionId = `${moment.id}-caption`

          return (
            <article
              key={moment.id}
              className="group relative min-w-[220px] overflow-hidden rounded-[2rem] bg-stone-200 sm:min-w-[250px]"
            >
              <img
                alt={moment.title}
                className="aspect-[9/16] w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                src={getStrkImageUrl(moment.displayImageId)}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/55 to-transparent px-5 pb-5 pt-16 text-stone-50">
                <p className="text-[11px] uppercase tracking-[0.34em] text-amber-200" id={titleId}>
                  {moment.title}
                </p>
                <p className="mt-2 font-['Cormorant_Garamond'] text-2xl leading-tight" id={captionId}>
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

export default UgcStrip
