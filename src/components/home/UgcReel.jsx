import { ugcStories, placeholderSvg } from '@/data/products.js'

export default function UgcReel() {
  return (
    <section id="journal" className="bg-velmora-ink py-20 text-velmora-porcelain sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">Seen in rituals</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-porcelain">Velmora in motion</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-velmora-cream/72">
            A reel-style strip of warm, intimate styling moments from ear stacks to layered necklaces.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="mx-auto flex max-w-7xl snap-x gap-4 px-4 sm:px-6 lg:px-8">
          {ugcStories.map((story) => (
            <article
              key={story.id}
              className="group relative h-[410px] w-[230px] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-velmora-blush shadow-lift sm:h-[500px] sm:w-[280px]"
            >
              <img
                alt={story.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={story.imgId}
                data-strk-img={`[${story.captionId}] [${story.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={placeholderSvg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/82 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-porcelain">
                <h3 id={story.titleId} className="font-serif text-3xl font-semibold leading-none">
                  {story.title}
                </h3>
                <p id={story.captionId} className="mt-2 text-sm leading-6 text-velmora-cream/82">
                  {story.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
