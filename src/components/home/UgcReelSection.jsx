import SectionHeading from '@/components/common/SectionHeading'

const UgcReelSection = ({ moments }) => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Seen on you"
          title="An editorial reel of real-life styling"
          description="Soft vertical moments inspired by the warmth of an intimate social feed, styled with Velmora favorites."
        />
      </div>
      <div className="mt-10 overflow-x-auto pb-2">
        <div className="mx-auto flex w-max min-w-full gap-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {moments.map((moment) => (
            <article
              key={moment.id}
              className="group relative w-[240px] overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ink text-white shadow-velmora sm:w-[280px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <p id={`ugc-${moment.id}-title`} className="sr-only">
                  {moment.title}
                </p>
                <p id={`ugc-${moment.id}-subtitle`} className="sr-only">
                  {moment.subtitle}
                </p>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                  alt={moment.title}
                  data-strk-img-id={moment.imageId}
                  data-strk-img={`[ugc-${moment.id}-subtitle] [ugc-${moment.id}-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="800"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-3xl leading-none text-white">{moment.title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/80">{moment.subtitle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UgcReelSection
