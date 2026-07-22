import { ugcStories } from '@/data/products'

const UgcReel = () => (
  <section id="journal" className="bg-velmora-ink py-20 text-velmora-ivory lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Seen in the ritual</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-ivory">Velmora in motion</h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-velmora-blush">A reel-style glimpse of the way gold becomes part of the day.</p>
      </div>
      <div className="flex snap-x gap-5 overflow-x-auto pb-4">
        {ugcStories.map((story) => (
          <article key={story.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-soft sm:w-64">
            <img
              alt={story.caption}
              className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
              data-strk-img-id={story.imgId}
              data-strk-img={`[${story.captionId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent" />
            <p id={story.captionId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-7 text-velmora-ivory">
              {story.caption}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default UgcReel
