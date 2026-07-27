import { ugcItems } from '@/data/store'
import SectionHeading from '@/components/shared/SectionHeading'

function UgcStrip() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Seen on you"
          title="An intimate reels-style styling strip"
          description="Warm editorial crops inspired by the way Velmora is worn in real life — softly stacked, gifted, and styled close to the skin."
        />

        <div className="flex snap-x gap-4 overflow-x-auto pb-2">
          {ugcItems.map((item) => (
            <article
              key={item.id}
              className="group relative min-w-[240px] snap-start overflow-hidden rounded-[2rem] bg-stone-900 text-stone-50 shadow-xl shadow-stone-900/10 sm:min-w-[280px]"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-${item.id}-caption] [ugc-${item.id}-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
                <p
                  id={`ugc-${item.id}-title`}
                  className="font-serif text-3xl leading-none text-stone-50"
                >
                  {item.title}
                </p>
                <p id={`ugc-${item.id}-caption`} className="text-sm leading-6 text-stone-200">
                  {item.caption}
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
