import { journalEntries } from '@/data/store.js'
import SectionHeading from '@/components/ui/SectionHeading.jsx'

export default function JournalPage() {
  return (
    <div className="bg-stone-950 pt-32 text-stone-100">
      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Journal"
          title="Editorial notes on gifting, layering, and lasting shine."
          description="A small collection of style stories and rituals that mirror the mood of the brand."
        />
      </section>
      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-2">
        {journalEntries.map((entry) => (
          <article key={entry.id} className="surface-card overflow-hidden">
            <div className="aspect-[16/10] bg-stone-950" data-strk-bg-id={`${entry.id}-bg`} data-strk-bg={`[${entry.id}-desc] [${entry.id}-title]`} data-strk-bg-ratio="16x9" data-strk-bg-width="1200" />
            <div className="space-y-4 p-8">
              <h2 id={`${entry.id}-title`} className="font-display text-4xl text-stone-100">
                {entry.title}
              </h2>
              <p id={`${entry.id}-desc`} className="text-sm leading-7 text-stone-300">
                {entry.description}
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-amber-200">Coming soon</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
