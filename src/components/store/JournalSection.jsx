import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { journalHighlights } from '@/data/storeData'

export default function JournalSection() {
  return (
    <section id="journal" className="border-t border-velmora-mist/80 bg-velmora-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Journal"
          title="Thoughtful rituals for styling, gifting, and caring for what you treasure."
          description="A quiet edit of tips and stories inspired by how Velmora is worn in real life."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {journalHighlights.map((entry) => (
            <article
              key={entry.id}
              className="rounded-[2rem] border border-velmora-mist/70 bg-white/70 p-7 shadow-soft transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-velmora text-velmora-muted">
                Editorial note
              </p>
              <h3 className="mt-4 font-display text-2xl text-velmora-ink">
                {entry.title}
              </h3>
              <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-velmora-ink">
                Read article
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
