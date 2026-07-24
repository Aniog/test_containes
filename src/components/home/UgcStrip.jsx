import SectionHeading from '../common/SectionHeading'

const UgcStrip = ({ moments }) => (
  <section className="border-y border-stone-200/10 bg-stone-900/40 px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl space-y-10">
      <SectionHeading
        eyebrow="Seen on her"
        title="An editorial take on real-life wear"
        description="A reel-inspired strip of warm portraits, ear stacks, and close-to-skin shimmer that feels personal rather than overly styled."
      />
      <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none]">
        {moments.map((moment) => (
          <article
            key={moment.id}
            className="group relative min-w-[16rem] snap-start overflow-hidden rounded-[2rem] border border-stone-200/10 bg-stone-950 md:min-w-[17.5rem]"
          >
            <span id={moment.titleId} className="sr-only">
              {moment.title}
            </span>
            <span id={moment.captionId} className="sr-only">
              {moment.caption}
            </span>
            <span id={moment.cueId} className="sr-only">
              {moment.cueText}
            </span>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={moment.title}
              className="aspect-[9/16] h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-strk-img-id={`${moment.id}-image-f4d1`}
              data-strk-img={`[${moment.cueId}] [${moment.captionId}] [${moment.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-stone-50">
              <p className="font-display text-3xl leading-none">{moment.title}</p>
              <p className="max-w-[14rem] text-sm leading-6 text-stone-200">{moment.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default UgcStrip
