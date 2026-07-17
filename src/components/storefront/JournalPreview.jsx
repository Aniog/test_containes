import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { journalEntries } from '../../data/storefrontContent'

function JournalPreview() {
  return (
    <section id="journal" className="bg-espresso px-4 py-20 text-pearl sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-gold">Journal</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Quiet styling notes for everyday gold.
            </h2>
          </div>
          <Link to="/#journal" className="text-xs uppercase tracking-[0.24em] text-pearl/70 transition hover:text-gold">
            Read the journal
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {journalEntries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-[2rem] border border-hairline-light bg-walnut p-6 transition hover:-translate-y-1 hover:border-gold/40"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-gold">Editorial Note</p>
              <h3 className="mt-4 font-serif text-3xl text-pearl">{entry.title}</h3>
              <p className="mt-4 text-sm leading-7 text-pearl/72">{entry.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-pearl/80">
                Discover <ArrowUpRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalPreview
