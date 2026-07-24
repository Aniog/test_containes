import SectionHeading from '@/components/common/SectionHeading'
import { journalEntries } from '@/data/products'

const JournalStrip = () => {
  return (
    <section id="journal" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl border-y border-velmora-line py-10">
        <SectionHeading
          eyebrow="Journal"
          title="Stories behind the stack"
          description="Styling notes and care rituals to help your everyday jewelry feel personal and lasting."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="rounded-[2rem] border border-velmora-line bg-velmora-pearl/60 p-7 shadow-velmora">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-mist">Editorial note</p>
              <h3 className="mt-4 font-display text-4xl leading-none text-velmora-ink">{entry.title}</h3>
              <p className="mt-4 text-sm leading-7 text-velmora-mist">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalStrip
