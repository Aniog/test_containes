import SectionHeader from '@/components/shared/SectionHeader'

const JournalSection = ({ entries }) => (
  <section id="journal" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
      <SectionHeader
        eyebrow="Journal"
        title="Editorial notes on layering, care, and gifting."
        description="A softer, more lifestyle-led space for the stories around the jewelry — how to wear it, care for it, and give it well."
      />
      <a
        href="#"
        className="text-sm font-medium uppercase tracking-[0.3em] text-velvet-700 transition hover:text-gold-500"
      >
        Read the journal
      </a>
    </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {entries.map((entry) => (
        <article
          key={entry.slug}
          className="rounded-[2rem] border border-velvet-200/70 bg-cream-100 p-8 shadow-editorial"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gold-500">Editorial</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight text-velvet-950">
            {entry.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-velvet-700">{entry.excerpt}</p>
        </article>
      ))}
    </div>
  </section>
)

export default JournalSection
