import { ArrowUpRight } from 'lucide-react'
import { journalEntries } from '@/data/products'

const JournalGrid = () => (
  <section className="bg-velmora-ivory pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-mist">
          Journal
        </p>
        <h1 id="journal-title" className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">
          Editorial notes on styling, gifting, and caring for what you keep.
        </h1>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {journalEntries.map((entry) => (
          <article
            key={entry.slug}
            className="overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-pearl shadow-card"
          >
            <div className="relative aspect-[4/5] bg-velmora-ivory">
              <div
                className="absolute inset-0"
                data-strk-bg-id={`journal-${entry.slug}`}
                data-strk-bg={`[journal-${entry.slug}-excerpt] [journal-${entry.slug}-title] [journal-title]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
            </div>
            <div className="p-6">
              <h2 id={`journal-${entry.slug}-title`} className="font-display text-3xl text-velmora-ink">
                {entry.title}
              </h2>
              <p
                id={`journal-${entry.slug}-excerpt`}
                className="mt-4 text-sm leading-7 text-velmora-mist"
              >
                {entry.excerpt}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-velmora-ink transition hover:text-velmora-gold"
              >
                Read article
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default JournalGrid
