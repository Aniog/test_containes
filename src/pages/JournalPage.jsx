import Container from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import { journalEntries } from '@/data/products'

const JournalPage = () => {
  return (
    <div className="pb-20 pt-32 md:pt-36">
      <Container>
        <SectionHeading
          eyebrow="Journal"
          title="Styling notes, gifting ideas, and care rituals"
          description="Editorial content for building a jewelry wardrobe that feels thoughtful, wearable, and quietly elevated."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-[2rem] border border-brand-line bg-brand-surface p-8 text-brand-espresso shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-brand-bronze">Editorial note</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">{entry.title}</h2>
              <p className="mt-4 text-sm leading-7 text-brand-mink">{entry.excerpt}</p>
              <button
                type="button"
                className="mt-6 border-b border-brand-espresso pb-1 text-xs font-medium uppercase tracking-[0.24em] text-brand-espresso"
              >
                Read more
              </button>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default JournalPage
