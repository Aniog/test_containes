import { ugcStories } from '@/data/products'

export default function UgcStrip() {
  return (
    <section id="journal" className="overflow-hidden bg-velmora-espresso py-16 text-velmora-ivory md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Seen in the wild</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ivory md:text-6xl">Real ways to wear Velmora</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-velmora-ivory/72">A reel-style glimpse of soft gold, skin, silk, and candlelit evenings.</p>
        </div>
      </div>
      <div className="flex snap-x gap-4 overflow-x-auto px-5 pb-2 no-scrollbar sm:px-8 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
        {ugcStories.map((story) => (
          <article key={story.id} className="group relative aspect-[9/16] w-[68vw] max-w-[270px] shrink-0 snap-start overflow-hidden rounded-t-full border border-velmora-ivory/15 bg-velmora-cocoa shadow-editorial sm:w-[260px]">
            <img
              alt={story.caption}
              src={story.image}
              className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/62 to-transparent p-5 pt-16">
              <h3 id={story.titleId} className="font-serif text-2xl leading-7 text-velmora-ivory">{story.caption}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
