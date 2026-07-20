import { Link } from 'react-router-dom'
import { journalEntries } from '../../lib/products'

export default function JournalSection() {
  return (
    <section id="journal" className="section-padding page-shell">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Journal</p>
          <h2 className="mt-4 editorial-heading">
            Notes on styling, gifting, and the beauty of the everyday ritual
          </h2>
        </div>
        <Link to="/shop" className="text-sm uppercase tracking-widest text-rosewood transition hover:text-ink">
          Shop the edit
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {journalEntries.map((entry) => (
          <article key={entry.id} className="surface-card p-7 md:p-9">
            <p className="text-xs uppercase tracking-widest text-rosewood">
              Editorial note
            </p>
            <h3 className="mt-4 font-display text-4xl text-ink">{entry.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink/75">
              {entry.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
