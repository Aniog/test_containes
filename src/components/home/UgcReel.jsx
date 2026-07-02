import { IMAGE_PLACEHOLDER, ugcClips } from '@/data/products'

export default function UgcReel() {
  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Seen on you</p>
          <h2 className="mt-3 font-display text-4xl text-stone-950">A reel of quiet gold moments</h2>
        </div>
        <p className="hidden max-w-sm text-sm leading-7 text-stone-600 md:block">
          Warm, wearable pieces styled by our community from early mornings to late dinners.
        </p>
      </div>
      <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        {ugcClips.map((clip) => {
          const captionId = `ugc-${clip.id}-caption`
          const descId = `ugc-${clip.id}-desc`

          return (
            <article
              key={clip.id}
              className="group relative min-w-[15rem] snap-start overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-200 text-stone-50 shadow-[0_18px_60px_-38px_rgba(28,25,23,0.45)] sm:min-w-[17rem]"
            >
              <img
                alt={clip.caption}
                className="aspect-[9/16] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-${clip.id}`}
                data-strk-img={`[${descId}] [${captionId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="720"
                src={IMAGE_PLACEHOLDER}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-stone-200">Velmora reel</p>
                <h3 id={captionId} className="mt-3 font-display text-3xl text-stone-50">
                  {clip.caption}
                </h3>
                <p id={descId} className="mt-2 text-sm leading-6 text-stone-200">
                  {clip.prompt}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
