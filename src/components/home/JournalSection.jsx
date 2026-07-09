import { journalEntries } from '@/data/products'
import SectionHeader from '@/components/common/SectionHeader'

const JournalSection = () => {
  return (
    <section id="journal" className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Journal"
          title="Editorial notes on gifting, layering, and care"
          description="A refined space for styling inspiration and thoughtful guidance around the pieces you wear most often."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl shadow-stone-900/5"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-amber-600">
                {entry.category}
              </p>
              <h3 className="mt-5 font-display text-4xl leading-none text-stone-950">
                {entry.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-stone-600">
                {entry.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalSection
