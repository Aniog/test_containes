import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { journalEntries } from '../../data/products'
import SectionHeading from '../shared/SectionHeading'

export default function JournalPreview() {
  return (
    <section className="section-shell pb-16 pt-4 md:pb-24">
      <div className="section-frame">
        <SectionHeading
          eyebrow="Journal"
          title="Editorial notes on gifting, styling, and care"
          description="Thoughtful articles for building a jewelry wardrobe that feels personal, polished, and lasting."
          titleId="journal-title"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={entry.slug}
              className="flex h-full flex-col justify-between rounded-[28px] border border-velmora-ink/10 bg-white/70 p-7 shadow-card"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-luxe text-velmora-truffle">Editorial</p>
                <h3 className="font-display text-3xl leading-none text-velmora-ink">
                  {entry.title}
                </h3>
                <p className="text-sm leading-7 text-velmora-cocoa">{entry.excerpt}</p>
              </div>
              <Link
                to="/journal"
                className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-luxe text-velmora-ink transition-colors duration-300 hover:text-velmora-champagne"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
