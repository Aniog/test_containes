import SectionHeading from '../ui/SectionHeading'

const UgcStrip = ({ items }) => {
  return (
    <section className="bg-noir py-20 text-ivory sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Worn in the wild"
          title="A reel of everyday glow"
          description="An editorial take on the pieces our community reaches for on repeat."
          light
        />
        <div className="mt-10 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none]">
          {items.map((item) => {
            const titleId = `${item.id}-title`
            const captionId = `${item.id}-caption`

            return (
              <article
                key={item.id}
                className="group relative min-w-[240px] overflow-hidden rounded-[2rem] border border-white/10 bg-noir-soft shadow-card sm:min-w-[270px]"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  data-strk-img-id={`${item.id}-image-62ad`}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  className="aspect-[9/16] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir via-noir/60 to-transparent px-5 pb-6 pt-16">
                  <p id={titleId} className="font-display text-3xl text-ivory">
                    {item.title}
                  </p>
                  <p id={captionId} className="mt-2 text-sm leading-6 text-ivory/75">
                    {item.caption}
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

export default UgcStrip
