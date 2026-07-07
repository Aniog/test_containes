import { placeholderSrc, ugcStories } from '@/data/products'

export default function UgcReel() {
  return (
    <section className="overflow-hidden bg-velmora-espresso py-16 text-velmora-porcelain lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Seen in motion</p>
            <h2 id="ugc-section-title" className="mt-3 font-serif text-4xl font-semibold tracking-[-0.03em] text-velmora-porcelain sm:text-5xl">The Velmora reel</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-champagne">A soft-scroll edit of gold pieces worn on ears, necklines, and golden-hour skin.</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-3 no-scrollbar">
          {ugcStories.map((story) => (
            <article key={story.id} className="group relative h-[25rem] w-[15rem] shrink-0 overflow-hidden rounded-[1.8rem] border border-velmora-gold/25 bg-velmora-champagne shadow-soft sm:h-[31rem] sm:w-[18rem]">
              <img
                alt={story.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={story.imgId}
                data-strk-img={`[${story.titleId}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={placeholderSrc}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
              <h3 id={story.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl italic leading-tight text-velmora-porcelain">
                {story.caption}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
