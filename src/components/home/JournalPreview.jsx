import { Link } from 'react-router-dom'

const JournalPreview = ({ entries }) => (
  <section className="border-t border-stone-200/10 bg-stone-900/35 px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="tracking-kicker text-xs uppercase text-amber-200">Journal</p>
          <h2 className="font-display text-4xl font-semibold leading-none text-stone-50 md:text-5xl">
            Notes on layering, gifting, and care
          </h2>
        </div>
        <Link
          to="/journal"
          className="text-xs uppercase tracking-[0.28em] text-stone-300 transition hover:text-amber-200"
        >
          View journal
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {entries.map((entry) => (
          <article key={entry.slug} className="overflow-hidden rounded-[2rem] border border-stone-200/10 bg-stone-950/70">
            <span id={entry.titleId} className="sr-only">
              {entry.title}
            </span>
            <span id={entry.descId} className="sr-only">
              {entry.excerpt}
            </span>
            <span id={entry.cueId} className="sr-only">
              {entry.cueText}
            </span>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={entry.title}
              className="aspect-[4/3] h-full w-full object-cover"
              data-strk-img-id={`journal-${entry.slug}-card-c3d9`}
              data-strk-img={`[${entry.cueId}] [${entry.descId}] [${entry.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
            />
            <div className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-400">
                {entry.category}
              </p>
              <h3 className="font-display text-3xl leading-tight text-stone-50">
                {entry.title}
              </h3>
              <p className="text-sm leading-7 text-stone-300">{entry.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default JournalPreview
