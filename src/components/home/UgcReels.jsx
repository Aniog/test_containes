import { ugcStories } from '../../data/products.js'

export default function UgcReels() {
  return (
    <section className="overflow-hidden bg-velmora-ink py-20 text-velmora-pearl lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p id="reels-eyebrow" className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-gold">As worn by you</p>
            <h2 id="reels-title" className="mt-3 font-serif text-4xl font-semibold md:text-6xl">Golden rituals in motion</h2>
          </div>
          <p id="reels-subtitle" className="max-w-md text-sm leading-7 text-velmora-sand">A reel-style glimpse of everyday shine: ear stacks, delicate chains, and giftable moments.</p>
        </div>
        <div className="flex snap-x gap-5 overflow-x-auto pb-4 no-scrollbar">
          {ugcStories.map((story) => {
            const captionId = `ugc-${story.id}-caption`
            return (
              <article key={story.id} className="group relative aspect-[9/16] w-[72vw] max-w-[260px] shrink-0 snap-start overflow-hidden rounded-t-full border border-white/15 bg-velmora-charcoal shadow-editorial sm:w-[260px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  data-strk-bg-id={`ugc-${story.id}-bg-3b7`}
                  data-strk-bg={`[${captionId}] [reels-subtitle] [reels-title]`}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/82 via-transparent to-transparent" />
                <p id={captionId} className="absolute inset-x-5 bottom-6 font-serif text-2xl font-semibold leading-tight text-velmora-pearl">{story.caption}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
