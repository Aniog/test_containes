import { journalEntries } from '@/data/storeData'

export default function Journal() {
  return (
    <div className="page-shell py-28 pb-16 md:pb-24">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">Journal</p>
        <h1 className="mt-5 font-display text-5xl leading-none text-velmora-ink md:text-6xl">
          Styling notes, gifting edits, and material stories.
        </h1>
        <p className="mt-6 text-base leading-8 text-velmora-taupe">
          A quiet editorial space for discovering how to wear, care for, and gift Velmora with ease.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {journalEntries.map((entry) => (
          <article key={entry.id} className="rounded-[2rem] border border-velmora-sand bg-velmora-ivory p-8 shadow-velmora-soft">
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-taupe">{entry.category}</p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-velmora-ink">{entry.title}</h2>
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-velmora-gold">Coming soon</p>
          </article>
        ))}
      </div>
    </div>
  )
}
