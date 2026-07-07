import SectionHeading from './SectionHeading'

export default function UgcReels({ moments }) {
  return (
    <section id="journal" className="overflow-hidden bg-velmora-pearl py-20 text-velmora-ink lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Worn by Velmora" title="Seen in soft light" text="A reel-inspired strip of everyday styling moments, from close-fit huggies to gift-ready gold." />
      </div>
      <div className="mt-12 flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {moments.map((moment) => (
          <article key={moment.id} className="group relative h-[410px] min-w-[230px] overflow-hidden rounded-[1.75rem] bg-velmora-ink shadow-[0_22px_55px_rgba(33,24,22,0.16)] sm:min-w-[270px]">
            <img
              alt={moment.caption}
              data-strk-img-id={moment.imgId}
              data-strk-img={`[${moment.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
            <p id={moment.titleId} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-velmora-ivory drop-shadow">{moment.caption}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
