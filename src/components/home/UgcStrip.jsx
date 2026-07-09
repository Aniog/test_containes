import { imagePlaceholder, ugcMoments } from '@/data/storefront'

export default function UgcStrip() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="velmora-kicker">Styled in the wild</p>
          <h2 className="font-display text-4xl text-velmora-ink md:text-5xl">A reel of real-life glow.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-velmora-cocoa/75">
          Inspired by the feeling of an elevated Reels strip — candid, warm, and still distinctly polished.
        </p>
      </div>
      <div className="hide-scrollbar -mx-4 overflow-x-auto px-4 pb-2">
        <div className="flex gap-4 sm:gap-5">
          {ugcMoments.map((moment) => {
            const titleId = `ugc-${moment.id}-title`
            const detailId = `ugc-${moment.id}-detail`

            return (
              <article
                key={moment.id}
                className="group relative w-[220px] shrink-0 overflow-hidden rounded-[2rem] border border-velmora-sand/50 bg-velmora-ink shadow-velmora sm:w-[250px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/15 to-transparent" />
                <img
                  alt={moment.caption}
                  className="aspect-[9/16] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  data-strk-img-id={`ugc-${moment.id}-img`}
                  data-strk-img={`[${detailId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src={imagePlaceholder}
                />
                <div className="absolute inset-x-0 bottom-0 space-y-3 p-5 text-velmora-mist">
                  <p id={titleId} className="font-display text-3xl leading-none">
                    {moment.caption}
                  </p>
                  <p id={detailId} className="text-sm leading-6 text-velmora-mist/80">
                    {moment.detail}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
