import { useStrkImages } from '@/lib/useStrkImages'

const journalEntries = [
  {
    id: 'journal-1',
    title: 'How to build an ear stack that still feels refined',
    excerpt: 'A guide to balancing volume, sparkle, and negative space with cuffs, huggies, and drops.',
  },
  {
    id: 'journal-2',
    title: 'The gifting edit: pieces that always feel thoughtful',
    excerpt: 'From birthdays to bridal moments, here is how to choose jewelry that lands beautifully.',
  },
  {
    id: 'journal-3',
    title: 'Care notes for keeping plated jewelry luminous',
    excerpt: 'A few simple habits that extend the life and polish of your favorite demi-fine pieces.',
  },
]

export default function JournalPage() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="bg-stone-50">
      <section className="border-b border-stone-200 bg-stone-950 text-stone-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-amber-200">
            Journal
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-none md:text-6xl">
            Editorial notes on gifting, layering, and modern jewelry rituals
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden rounded-[2rem] bg-stone-100 shadow-xl">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Featured journal entry"
              className="aspect-[16/10] w-full object-cover"
              data-strk-img-id="journal-feature-image"
              data-strk-img="[journal-feature-body] [journal-feature-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1400"
            />
            <div className="p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                Featured Story
              </p>
              <h2 id="journal-feature-title" className="mt-4 font-serif text-4xl text-stone-950">
                Styling gold jewelry for day-to-evening dressing
              </h2>
              <p id="journal-feature-body" className="mt-4 text-base leading-7 text-stone-600">
                Learn how to move from crisp morning shirting to evening silk with pieces that feel polished, not overdone.
              </p>
            </div>
          </article>

          <div className="space-y-5">
            {journalEntries.map((entry) => (
              <article key={entry.id} className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                  Editorial
                </p>
                <h3 className="mt-4 font-serif text-3xl text-stone-950">
                  {entry.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{entry.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
