import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { journalEntries } from '@/data/store'

const JournalPreview = () => {
  return (
    <section className="space-y-10">
      <SectionHeader
        eyebrow="Journal"
        title="Notes on gifting, layering, and everyday luxury"
        description="A soft editorial layer for shoppers who want to style pieces thoughtfully and choose gifts with ease."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {journalEntries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-[2rem] border border-stone-200/80 bg-white/60 p-6 shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">{entry.category}</p>
            <h3 className="mt-5 font-serif text-3xl leading-none text-brand-text">{entry.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">{entry.excerpt}</p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-brand-text transition hover:text-brand-gold"
            >
              Read more
              <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JournalPreview
