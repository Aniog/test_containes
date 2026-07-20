import { ugcStories } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strk-image'

export default function UgcReels() {
  return (
    <section id="journal" className="bg-velmora-espresso px-5 py-16 text-velmora-ivory sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">
              Worn in warm light
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-velmora-pearl sm:text-5xl lg:text-6xl">
              Real moments, refined shine.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-bone">
            A reel-style glimpse of Velmora pieces layered, gifted, and styled for daily rituals.
          </p>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {ugcStories.map((story) => (
            <article key={story.id} className="group relative aspect-[9/16] w-[72vw] max-w-[260px] shrink-0 snap-start overflow-hidden border border-velmora-ivory/15 bg-velmora-ink sm:w-[260px]">
              <img
                alt={story.caption}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                data-strk-img-id={story.imgId}
                data-strk-img={`[${story.textId}] jewelry worn by woman vertical reel warm editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src={getStrkImageUrl(story.imgId)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
              <p id={story.textId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-velmora-pearl">
                {story.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
