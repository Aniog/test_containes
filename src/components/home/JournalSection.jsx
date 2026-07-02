import SectionHeader from '@/components/shared/SectionHeader'

const JournalSection = ({ entries }) => {
  return (
    <section id="journal" className="section-shell pt-0">
      <SectionHeader
        eyebrow="From the journal"
        title="Stories around gifting, layering, and everyday glow"
        description="Editorial notes that reinforce the premium-but-accessible Velmora world without overwhelming the shopping journey."
        linkLabel="Browse the journal"
        linkTo="/collections"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {entries.map((entry) => (
          <article
            key={entry.title}
            className="rounded-[2rem] border border-velmora-line bg-velmora-sand p-6 shadow-velmora-soft transition hover:-translate-y-1 hover:shadow-velmora"
          >
            <p className="text-xs uppercase tracking-luxury text-velmora-gold">Editorial</p>
            <h3 className="mt-4 font-display text-3xl text-velmora-ink">{entry.title}</h3>
            <p className="mt-4 max-w-xl text-sm leading-8 text-velmora-muted sm:text-base">
              {entry.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JournalSection
