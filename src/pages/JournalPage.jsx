import SectionHeading from '@/components/ui/SectionHeading'
import EditorialVisual from '@/components/ui/EditorialVisual'
import { journalEntries } from '@/data/products'

export default function JournalPage() {
  return (
    <div className="px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Velmora Journal"
          title="Notes on styling, care, and gifting"
          description="A calm editorial space for everyday jewelry rituals and special-occasion inspiration."
        />

        <div className="grid gap-7 lg:grid-cols-3">
          {journalEntries.map((entry, index) => (
            <article
              key={entry.id}
              className="overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ivory shadow-velmora-soft"
            >
              <EditorialVisual
                mood={index % 3 === 0 ? 'still' : index % 3 === 1 ? 'portrait' : 'gift'}
                accent={index % 2 === 0 ? 'left' : 'right'}
                className="aspect-[4/5] rounded-none"
              />
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-brand text-velmora-taupe">Editorial Note</p>
                <h2 className="font-display text-4xl leading-none text-velmora-ink">
                  {entry.title}
                </h2>
                <p className="text-sm leading-7 text-velmora-taupe">{entry.excerpt}</p>
                <button
                  type="button"
                  className="text-xs uppercase tracking-product text-velmora-ink transition hover:text-velmora-gold"
                >
                  Read Soon
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
