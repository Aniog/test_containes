import { Link } from 'react-router-dom'
import { journalEntries } from '@/data/storeData'
import SectionHeading from './SectionHeading'

const JournalSection = () => {
  return (
    <section className="velmora-shell space-y-8 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Journal"
        title="Editorial notes on gifting, layering, and daily wear"
        description="A softer pace for inspiration, styling ideas, and thoughtful jewelry rituals."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {journalEntries.map((entry) => {
          const titleId = `journal-${entry.slug}-title`
          const descId = `journal-${entry.slug}-desc`
          return (
            <article key={entry.slug} className="overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-card shadow-soft">
              <img
                src=""
                alt={entry.title}
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id={`journal-${entry.slug}-image`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
              />
              <div className="p-6">
                <h3 id={titleId} className="font-display text-3xl text-velmora-ink">
                  {entry.title}
                </h3>
                <p id={descId} className="mt-3 text-sm leading-7 text-velmora-smoke">
                  {entry.excerpt}
                </p>
                <Link
                  to="/journal"
                  className="mt-5 inline-flex text-xs uppercase tracking-widest text-velmora-gold transition hover:text-velmora-bronze"
                >
                  Read more
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default JournalSection
