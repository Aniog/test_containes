import SectionIntro from '@/components/common/SectionIntro'

const UGCStrip = ({ items }) => {
  return (
    <section className="space-y-8">
      <SectionIntro
        eyebrow="Velmora in motion"
        title="A reel-worthy jewelry ritual"
        description="An editorial-inspired strip of everyday styling moments, from softly stacked ears to luminous evening glow."
      />
      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none]">
        {items.map((item) => {
          const titleId = `${item.id}-caption`
          const noteId = `${item.id}-note`

          return (
            <article
              key={item.id}
              className="group relative min-w-[15rem] overflow-hidden rounded-[28px] border border-velvet/10 bg-velvet text-ivory shadow-soft md:min-w-[17rem]"
            >
              <img
                alt={item.caption}
                className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                data-strk-img-id={`${item.id}-image`}
                data-strk-img={`[${noteId}] [${titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                <h3 id={titleId} className="font-serif text-3xl leading-none text-ivory">
                  {item.caption}
                </h3>
                <p id={noteId} className="text-sm leading-6 text-ivory-deep/75">
                  {item.note}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default UGCStrip
