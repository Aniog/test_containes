const entries = [
  {
    id: 'journal-layering',
    title: 'How to layer gold jewelry with intention',
    summary: 'A softer approach to mixing chains, cuffs, and huggies for everyday polish.',
  },
  {
    id: 'journal-gifting',
    title: 'The gifting edit for milestone moments',
    summary: 'Thoughtful pieces that feel premium from the box to the final styling moment.',
  },
  {
    id: 'journal-care',
    title: 'Caring for demi-fine pieces beautifully',
    summary: 'Simple rituals that help preserve shine, warmth, and day-to-day wearability.',
  },
]

const JournalSection = () => (
  <section id="journal" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-7xl space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Journal</p>
          <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">Editorial notes from the world of Velmora</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-ink-soft">
          A compact reading list on styling, gifting, and preserving the pieces you reach for most.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {entries.map((entry) => (
          <article key={entry.id} className="rounded-[28px] border border-champagne/30 bg-white/80 p-6 shadow-soft transition hover:-translate-y-1">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Velmora Journal</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight text-espresso">{entry.title}</h3>
            <p className="mt-4 text-sm leading-7 text-ink-soft">{entry.summary}</p>
            <button
              type="button"
              className="mt-8 text-xs uppercase tracking-[0.24em] text-espresso transition hover:text-gold"
            >
              Read soon
            </button>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default JournalSection
