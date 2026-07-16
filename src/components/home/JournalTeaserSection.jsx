import { ArrowRight } from 'lucide-react'
import { journalEntries } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading'

export default function JournalTeaserSection() {
  return (
    <section className="bg-truffle py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Journal"
          title="Editorial notes on gifting, layering, and everyday shine"
          description="A thoughtful read for customers discovering how Velmora fits into daily style."
          align="left"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={entry.id}
              className="flex flex-col gap-5 rounded-3xl border border-pearl/15 bg-pearl/5 p-7 text-pearl"
            >
              <span className="eyebrow text-champagne">Feature</span>
              <h3 className="font-serif text-3xl leading-none">{entry.title}</h3>
              <p className="text-sm leading-7 text-pearl/80">{entry.excerpt}</p>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-champagne"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
