import { MoveUpRight } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

function JournalSection({ entries }) {
  return (
    <section id="journal" className="border-t border-pearl bg-white/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Journal"
          title="A slower approach to styling and gifting"
          description="Editorial notes, layering guidance, and ideas for building a jewelry wardrobe that still feels like you."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {entries.map((entry) => (
            <article key={entry.id} className="rounded-luxe border border-pearl bg-ivory p-6 shadow-soft">
              <p className="text-xs uppercase tracking-luxe text-smoke">Editorial note</p>
              <h3 className="mt-4 font-serif text-4xl leading-none text-velvet">{entry.title}</h3>
              <p className="mt-4 text-sm leading-7 text-smoke">{entry.excerpt}</p>
              <button type="button" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-velvet transition hover:text-champagne">
                Read More
                <MoveUpRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalSection
