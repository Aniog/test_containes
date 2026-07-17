import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useStockImages } from '@/hooks/useStockImages'

const entries = [
  {
    id: 'journal-1',
    title: 'How to build a warm gold stack',
    excerpt: 'A styling guide to mixing huggies, cuffs, and chains with editorial restraint.',
  },
  {
    id: 'journal-2',
    title: 'The new rules of self-gifting',
    excerpt: 'Why modern jewelry wardrobes begin with pieces chosen for yourself first.',
  },
  {
    id: 'journal-3',
    title: 'From day to dinner in one set',
    excerpt: 'Refined ways to style gift-ready jewelry with tailoring, knits, and silk.',
  },
]

export default function JournalPage() {
  const containerRef = useRef(null)
  useStockImages(containerRef)

  return (
    <main ref={containerRef} className="bg-ivory pb-24 pt-28 text-ink sm:pt-32">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.34em] text-mocha">Journal</p>
          <h1 id="journal-title" className="mt-5 font-display text-5xl leading-none text-ink sm:text-6xl">
            Notes on styling, gifting, and wearing gold beautifully.
          </h1>
          <p id="journal-description" className="mt-6 text-base leading-8 text-mocha">
            Editorial stories from the world of Velmora — quiet luxury for everyday rituals and meaningful occasions.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {entries.map((entry) => {
            const titleId = `${entry.id}-title`
            const excerptId = `${entry.id}-excerpt`
            return (
              <article
                key={entry.id}
                className="overflow-hidden rounded-[2rem] border border-mocha/10 bg-white/70 shadow-card"
              >
                <div className="overflow-hidden bg-sand">
                  <img
                    alt={entry.title}
                    className="aspect-[4/5] h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                    data-strk-img-id={`${entry.id}-image`}
                    data-strk-img={`[${excerptId}] [${titleId}] [journal-description] [journal-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-7">
                  <h2 id={titleId} className="font-display text-3xl leading-none text-ink">
                    {entry.title}
                  </h2>
                  <p id={excerptId} className="mt-4 text-sm leading-7 text-mocha">
                    {entry.excerpt}
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-ink transition hover:text-gold"
                  >
                    Read story
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
