const journalEntries = [
  {
    id: 'journal-1',
    title: 'How to layer demi-fine necklaces with ease',
    description: 'Simple proportions and styling notes that keep your stack polished from morning to evening.',
  },
  {
    id: 'journal-2',
    title: 'The gifting edit: pieces with instant appeal',
    description: 'A refined guide to choosing earrings, huggies, and sets that feel personal but never difficult.',
  },
]

export default function JournalSection() {
  return (
    <section className="bg-[var(--velmora-ink)] py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/55">Journal</p>
            <h2 className="text-4xl leading-none md:text-5xl">Editorial notes on gifting, styling, and care.</h2>
          </div>
          <a href="#" className="text-xs uppercase tracking-[0.24em] text-white/70 transition hover:text-[var(--velmora-gold)]">
            Read more
          </a>
        </div>

        <div className="grid gap-5 pt-8 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">Velmora Notes</p>
              <h3 className="mt-4 text-3xl leading-none text-white">{entry.title}</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72">{entry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
