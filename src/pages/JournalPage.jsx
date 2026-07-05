import { journalEntries } from '../lib/store-data.js'

function JournalPage() {
  return (
    <section className="page-shell pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-overline text-velmora-taupe">Journal</p>
        <h1 className="mt-4 font-display text-5xl leading-none text-velmora-espresso sm:text-6xl">
          Styling notes, gifting edits, and jewelry care
        </h1>
        <p className="mt-6 text-base leading-8 text-velmora-taupe">
          A light editorial layer for the brand — ready to grow into a richer content destination later.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {journalEntries.map((entry) => {
          const titleId = `journal-${entry.slug}-title`
          const descId = `journal-${entry.slug}-desc`
          const visualId = `journal-${entry.slug}-visual`

          return (
            <article key={entry.slug} className="overflow-hidden rounded-panel border border-velmora-line bg-white shadow-card">
              <span id={visualId} className="sr-only">{entry.visual}</span>
              <div className="aspect-[4/5] overflow-hidden bg-velmora-mist">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={entry.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`journal-${entry.slug}-image`}
                  data-strk-img={`[${visualId}] [${descId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                />
              </div>
              <div className="p-6">
                <h2 id={titleId} className="font-display text-3xl text-velmora-espresso">
                  {entry.title}
                </h2>
                <p id={descId} className="mt-4 text-sm leading-7 text-velmora-taupe">
                  {entry.excerpt}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default JournalPage
