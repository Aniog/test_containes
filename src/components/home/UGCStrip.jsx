import { ugcMoments } from '@/data/products'

const UGCStrip = () => (
  <section className="border-y border-velmora-line bg-velmora-noir py-16 text-velmora-ivory sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-gold">
            Worn in real life
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">A reel of everyday shine</h2>
        </div>
        <p className="hidden max-w-sm text-sm leading-7 text-velmora-ivory/72 lg:block">
          Premium styling moments inspired by the intimacy of a saved reel.
        </p>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto pb-2 sm:gap-6">
        {ugcMoments.map((moment) => (
          <article
            key={moment.id}
            className="group relative isolate min-w-[230px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 sm:min-w-[260px]"
          >
            <div className="aspect-[9/16]" />
            <div
              className="absolute inset-0"
              data-strk-bg-id={`ugc-${moment.id}`}
              data-strk-bg={`[ugc-${moment.id}-note] [ugc-${moment.id}-caption] [ugc-${moment.id}-title]`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="900"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-velmora-noir via-velmora-noir/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-20 p-5">
              <h3 id={`ugc-${moment.id}-title`} className="font-display text-3xl text-velmora-ivory">
                {moment.title}
              </h3>
              <p id={`ugc-${moment.id}-caption`} className="mt-2 text-sm text-velmora-ivory/80">
                {moment.caption}
              </p>
              <p id={`ugc-${moment.id}-note`} className="sr-only" aria-hidden="true">
                {moment.note}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default UGCStrip
