import { journalEntries } from '@/data/storeData'

function JournalPreview() {
  return (
    <section id="journal" className="border-y border-mist/70 bg-sand/35 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-luxe text-champagne">Journal</p>
            <h2 className="text-4xl sm:text-5xl">Editorial notes on wearing gold well</h2>
          </div>
          <a
            href="/shop"
            className="inline-flex border-b border-champagne pb-1 text-sm uppercase tracking-[0.22em] text-ink transition hover:text-champagne"
          >
            Explore the shop
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="rounded-[2rem] border border-mist/70 bg-ivory p-6 shadow-card sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-champagne">Editorial</p>
              <h3 className="mt-4 text-3xl">{entry.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-8 text-ink/72">{entry.excerpt}</p>
              <a
                href="/shop"
                className="mt-6 inline-flex border-b border-champagne pb-1 text-xs uppercase tracking-[0.22em] text-ink transition hover:text-champagne"
              >
                Read entry
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalPreview
