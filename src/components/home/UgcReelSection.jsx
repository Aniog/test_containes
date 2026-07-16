export default function UgcReelSection({ moments }) {
  return (
    <section className="overflow-hidden bg-velmora-mist/65 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-editorial text-velmora-muted">Styled in real life</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">
              Velmora on you
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-velmora-muted">
            A reel-inspired edit of how our community wears warm gold every day — from soft office polish to evening shine.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {moments.map((moment) => {
            const titleId = `ugc-${moment.id}-title`
            const captionId = `ugc-${moment.id}-caption`

            return (
              <article
                key={moment.id}
                className="group relative min-w-[230px] max-w-[230px] overflow-hidden rounded-[2rem] bg-velmora-ink text-velmora-paper shadow-velmora-card sm:min-w-[250px] sm:max-w-[250px]"
              >
                <img
                  alt={moment.title}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
                  data-strk-img-id={`ugc-${moment.id}-image`}
                  data-strk-img={`[${captionId}] [${titleId}] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,23,20,0.08),rgba(31,23,20,0.72))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 id={titleId} className="font-serif text-2xl text-velmora-paper">
                    {moment.title}
                  </h3>
                  <p id={captionId} className="mt-2 text-sm leading-6 text-velmora-paper/80">
                    {moment.caption}
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
