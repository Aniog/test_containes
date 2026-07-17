import SectionHeading from '@/components/shared/SectionHeading'

function UgcStrip({ moments }) {
  return (
    <section className="border-y border-pearl bg-white/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Styled by Velmora women"
          title="A reels-style look at how it wears"
          description="A softly scrolling strip of close-up moments, layering ideas, and giftable glow."
        />

        <div className="flex gap-4 overflow-x-auto pb-2">
          {moments.map((moment) => {
            const titleId = `ugc-${moment.id}-title`
            const descId = `ugc-${moment.id}-desc`

            return (
              <article key={moment.id} className="group relative min-w-[220px] flex-1 overflow-hidden rounded-luxe border border-pearl bg-velvet shadow-card md:min-w-[260px]">
                <img
                  alt={moment.title}
                  className="h-[420px] w-full object-cover transition duration-500 ease-premium group-hover:scale-105"
                  data-strk-img-id={`ugc-${moment.id}-image`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 space-y-2 bg-gradient-to-t from-velvet via-velvet/70 to-transparent px-5 pb-6 pt-20 text-ivory">
                  <h3 id={titleId} className="font-serif text-3xl leading-none">{moment.caption}</h3>
                  <p id={descId} className="text-sm leading-6 text-pearl">{moment.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UgcStrip
