const entries = [
  {
    title: 'How to build a warm gold ear stack',
    category: 'Styling',
    excerpt: 'A quiet guide to mixing cuffs, huggies, and small crystal accents without overwhelming your look.',
  },
  {
    title: 'The self-gift edit under $75',
    category: 'Gift notes',
    excerpt: 'Considered pieces that feel personal, polished, and easy to wear every day.',
  },
  {
    title: 'Caring for demi-fine jewelry',
    category: 'Materials',
    excerpt: 'Simple rituals to preserve the glow of 18K gold plating and crystal details between wears.',
  },
]

const JournalPreview = () => {
  return (
    <section id="journal" className="bg-velmora-parchment px-4 py-16 text-velmora-ink sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-ink/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">The journal</p>
            <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink md:text-6xl">Notes on wearing gold</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-espresso/75">
            Styling guidance, care rituals, and gift ideas written with the same restraint as the jewelry.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {entries.map((entry) => (
            <article key={entry.title} className="group border border-velmora-ink/10 bg-velmora-cream p-7 text-velmora-ink transition duration-300 hover:-translate-y-1 hover:shadow-velvet">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-velmora-bronze">{entry.category}</p>
              <h3 className="mt-5 font-serif text-3xl font-semibold leading-8 text-velmora-ink">{entry.title}</h3>
              <p className="mt-4 text-sm leading-7 text-velmora-espresso/75">{entry.excerpt}</p>
              <span className="mt-7 inline-block border-b border-velmora-bronze pb-2 text-xs font-bold uppercase tracking-[0.23em] text-velmora-ink transition group-hover:text-velmora-bronze">
                Read note
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalPreview
