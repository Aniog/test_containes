import { journalEntries } from '@/data/products'
import { getStockImageUrl } from '@/lib/stockImageConfig'
import SectionHeading from '@/components/storefront/SectionHeading'

const JournalSection = () => {
  return (
    <section id="journal" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Journal"
        title="Thoughtful styling and gifting notes from Velmora"
        copy="Editorial inspiration to help you layer, gift, and wear your pieces with intention."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {journalEntries.map((entry) => (
          <article
            key={entry.id}
            aria-label={`${entry.title}. ${entry.summary}`}
            className="overflow-hidden rounded-[2rem] border border-line bg-pearl shadow-float"
          >
            <div aria-hidden="true" className="relative aspect-[16/10] bg-bark">
              <img
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                src={getStockImageUrl(entry.imageId)}
              />
            </div>
            <div aria-hidden="true" className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-caps text-gold">Editorial note</p>
              <h3 className="mt-4 font-serif text-3xl text-ink">{entry.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{entry.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JournalSection
