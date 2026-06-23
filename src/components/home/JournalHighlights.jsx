import { ArrowUpRight } from 'lucide-react'
import { journalHighlights } from '@/data/products'

function JournalHighlights() {
  return (
    <section className="section-shell" id="journal">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="eyebrow text-amber-200">Journal</p>
          <h2 className="font-display text-4xl text-stone-100 sm:text-5xl">
            Editorial notes from the Velmora world.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-stone-300">
          Styling rituals, gifting cues, and the understated details behind an intentional jewelry wardrobe.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {journalHighlights.map((entry) => (
          <article className="surface-panel group space-y-5 p-7" key={entry.id}>
            <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Journal Entry</p>
            <h3 className="font-display text-4xl text-stone-100 transition group-hover:text-amber-100">
              {entry.title}
            </h3>
            <p className="text-sm leading-7 text-stone-300">{entry.description}</p>
            <a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-amber-200" href="#journal-story">
              Read more
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JournalHighlights
