import SectionHeading from '@/components/ui/SectionHeading'

const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const ReelStrip = ({ moments }) => {
  return (
    <section className="bg-[var(--color-surface-alt)] px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Styled by Velmora women"
          title="A reel of golden everyday moments"
          description="An editorial take on an Instagram-inspired strip, captured in warm light and lived-in elegance."
        />
        <div className="scrollbar-hidden flex gap-5 overflow-x-auto pb-2">
          {moments.map((moment) => {
            const titleId = `${moment.id}-title`
            const subtitleId = `${moment.id}-subtitle`

            return (
              <article
                key={moment.id}
                className="group relative min-w-[240px] flex-1 overflow-hidden bg-[var(--color-ink)] text-[var(--color-text-on-dark)] sm:min-w-[280px]"
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={imagePlaceholder}
                    alt={moment.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    data-strk-img-id={`${moment.id}-vertical-card`}
                    data-strk-img={`[${subtitleId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,7,0.08)_0%,rgba(12,8,7,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p
                      id={titleId}
                      className="font-serif-display text-3xl leading-none text-[var(--color-text-on-dark)]"
                    >
                      {moment.title}
                    </p>
                    <p
                      id={subtitleId}
                      className="mt-3 max-w-[16rem] text-sm leading-6 text-[var(--color-text-on-dark-muted)]"
                    >
                      {moment.subtitle}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ReelStrip
