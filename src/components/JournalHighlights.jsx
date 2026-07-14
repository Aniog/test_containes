import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/SectionHeading'

const entries = [
  {
    id: 'care',
    title: 'How to keep gold-plated pieces luminous',
    excerpt:
      'A simple ritual for preserving shine, avoiding tarnish, and storing your favorites beautifully.',
    imageId: 'velmora-journal-care-8d31ca',
    query: 'editorial flatlay gold jewelry care tray silk ribbon warm luxury',
  },
  {
    id: 'gifting',
    title: 'The modern gift edit for birthdays and bridal moments',
    excerpt:
      'Thoughtful pairings designed to feel personal, polished, and ready to give.',
    imageId: 'velmora-journal-gifting-5fae92',
    query: 'gift wrapped jewelry box gold necklace editorial warm feminine luxury',
  },
  {
    id: 'styling',
    title: 'Three ways to layer earrings, cuffs, and huggies',
    excerpt:
      'A quiet-luxury styling guide for building an effortless ear stack that still feels elevated.',
    imageId: 'velmora-journal-styling-14be76',
    query: 'editorial ear stack gold huggies cuff styling portrait warm neutral',
  },
]

const JournalHighlights = () => {
  return (
    <section id="journal" className="bg-velmora-cream/70 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Journal"
            title="Editorial notes from the Velmora world"
            description="Care rituals, gifting ideas, and styling stories that make everyday jewelry feel more intentional."
          />
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-velmora-goldDeep transition hover:text-velmora-espresso"
          >
            Explore the edit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {entries.map((entry) => (
            <article
              key={entry.id}
              className="overflow-hidden rounded-[30px] border border-velmora-taupe/25 bg-velmora-ivory shadow-[0_18px_50px_rgba(43,31,25,0.06)]"
            >
              <img
                alt={entry.title}
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id={entry.imageId}
                data-strk-img={entry.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-velmora-goldDeep">
                  Journal story
                </p>
                <h3 className="font-serif text-3xl leading-tight text-velmora-espresso">
                  {entry.title}
                </h3>
                <p className="text-sm leading-7 text-velmora-cacao/75">{entry.excerpt}</p>
                <button
                  type="button"
                  className="text-xs uppercase tracking-[0.32em] text-velmora-cacao/70 transition hover:text-velmora-espresso"
                >
                  Read more soon
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalHighlights
