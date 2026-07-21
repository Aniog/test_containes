import SectionHeading from '../ui/SectionHeading'

const JournalPreview = ({ entries }) => {
  return (
    <section id="journal" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Journal"
          title="Notes on styling, gifting, and jewelry care"
          description="A small editorial layer that makes the storefront feel more like a brand world than a catalogue."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {entries.map((entry) => (
            <article key={entry.id} className="rounded-[2rem] border border-noir/10 bg-white p-7 shadow-soft">
              <p className="text-xs uppercase tracking-brand text-taupe">{entry.category}</p>
              <h3 className="mt-4 font-display text-3xl text-noir">{entry.title}</h3>
              <p className="mt-4 text-sm leading-7 text-taupe">{entry.excerpt}</p>
              <a href="/shop" className="mt-6 inline-flex text-sm uppercase tracking-brand text-noir transition hover:text-gold">
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalPreview
