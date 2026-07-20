import SectionIntro from './SectionIntro.jsx'

export default function UgcReelSection({ moments }) {
  return (
    <section id="journal" className="bg-velmora-espresso px-5 py-16 text-velmora-cream md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Seen in the everyday"
          title="Quiet sparkle, captured candidly"
          text="A reel-style look at how Velmora pieces layer into commutes, dinner plans, gifting rituals, and slow weekends."
        />
        <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 md:gap-6">
          {moments.map((moment) => (
            <article key={moment.id} className="group relative aspect-[9/16] w-[68vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-t-full border border-velmora-cream/15 bg-velmora-mocha sm:w-[280px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                data-strk-bg-id={moment.imgId}
                data-strk-bg={`[${moment.titleId}] [ugc-section-context]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/10 to-transparent" />
              <p id={moment.titleId} className="absolute inset-x-5 bottom-6 font-serif text-2xl leading-tight text-velmora-cream drop-shadow-sm">
                {moment.caption}
              </p>
            </article>
          ))}
        </div>
        <p id="ugc-section-context" className="sr-only">gold jewelry worn on ear and neck by women in warm editorial light</p>
      </div>
    </section>
  )
}
