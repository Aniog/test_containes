import { ArrowRight } from 'lucide-react'
import { journalEntries } from '@/data/storeData.js'

const JournalStrip = () => {
  return (
    <section id="journal" className="page-shell pb-20 sm:pb-24">
      <div className="editorial-divider" />
      <div className="grid gap-6 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
        <div>
          <p className="eyebrow-label mb-3">Journal</p>
          <h2 className="text-4xl leading-none text-velmora-ink sm:text-5xl">
            Editorial notes on gifting, layering, and everyday shine
          </h2>
        </div>

        <div className="grid gap-4">
          {journalEntries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-[24px] border border-velmora-sand/70 bg-white/60 p-6 transition duration-300 hover:shadow-velmora-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-mocha">
                {entry.category}
              </p>
              <h3 className="mt-3 text-3xl leading-none text-velmora-ink">{entry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-velmora-mocha">{entry.blurb}</p>
              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink transition duration-300 hover:text-velmora-gold"
              >
                Read article
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalStrip
