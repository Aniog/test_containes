import { ugcMoments } from '@/data/products'

function UgcReel() {
  return (
    <section className="section-shell space-y-8 overflow-hidden">
      <div className="space-y-3">
        <p className="eyebrow text-amber-200">Worn in real life</p>
        <h2 className="font-display text-4xl text-stone-100 sm:text-5xl">
          A reels-style glimpse at the Velmora glow.
        </h2>
      </div>

      <div className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        {ugcMoments.map((moment) => (
          <article
            className="group relative min-w-[74vw] snap-start overflow-hidden rounded-[2rem] border border-stone-800/80 bg-stone-900 shadow-[0_18px_40px_rgba(0,0,0,0.22)] sm:min-w-[320px]"
            key={moment.id}
          >
            <div className="relative aspect-[9/16] overflow-hidden">
              <img
                alt={moment.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                data-strk-img={`[ugc-${moment.id}-caption] [ugc-${moment.id}-title] [ugc-title]`}
                data-strk-img-id={moment.imageId}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                <p className="font-display text-3xl text-stone-50" id={`ugc-${moment.id}-title`}>
                  {moment.title}
                </p>
                <p className="text-sm text-stone-200" id={`ugc-${moment.id}-caption`}>
                  {moment.caption}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <span className="sr-only" id="ugc-title">
        Velmora user generated jewelry styling moments
      </span>
    </section>
  )
}

export default UgcReel
