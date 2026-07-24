import { journalEntries } from '@/data/store'

const JournalPage = () => {
  return (
    <main className="bg-brand-canvas px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">Journal</p>
          <h1 className="mt-5 font-serif text-5xl leading-none text-brand-text sm:text-6xl">
            Styling notes, gifting edits, and the soft rituals of everyday luxury.
          </h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-[2rem] border border-stone-200/80 bg-white/70 p-6 shadow-card backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-brand-gold">{entry.category}</p>
              <h2 className="mt-5 font-serif text-3xl leading-none text-brand-text">
                {entry.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default JournalPage
