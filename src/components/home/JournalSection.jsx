import { ArrowUpRight } from 'lucide-react'

import SectionHeading from '@/components/common/SectionHeading'
import { journalStories } from '@/data/products'

const JournalSection = () => {
  return (
    <section id="journal" className="space-y-10">
      <SectionHeading
        eyebrow="Journal"
        title="Editorial notes from the Velmora world"
        description="A softer, more intentional approach to gifting and styling jewelry every day."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {journalStories.map((story) => (
          <article
            key={story.id}
            className="rounded-[2rem] border border-velmora-mist/20 bg-white/70 p-6 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">
                  Journal Entry
                </p>
                <h3 className="font-display text-4xl leading-none text-velmora-ink">
                  {story.title}
                </h3>
                <p className="text-sm leading-7 text-velmora-rose">
                  {story.excerpt}
                </p>
              </div>
              <button
                type="button"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-velmora-mist/20 text-velmora-ink transition hover:border-velmora-bronze hover:text-velmora-bronze"
                aria-label={`Open ${story.title}`}
              >
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JournalSection
