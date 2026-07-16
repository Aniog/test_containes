import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { journalEntries } from '@/data/store.js'
import { useImageLoader } from '@/hooks/useImageLoader.jsx'

function JournalPage() {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [journalEntries.length])

  return (
    <div className="bg-velmora-pearl pt-28" ref={containerRef}>
      <section className="velmora-container py-12 md:py-20">
        <p className="velmora-eyebrow">Journal</p>
        <h1 className="mt-4 max-w-4xl font-display text-6xl text-velmora-ink sm:text-7xl">
          Styling notes, gifting edits, and modern jewelry rituals
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {journalEntries.map((entry) => {
            const titleId = `journal-${entry.slug}-title`
            const excerptId = `journal-${entry.slug}-excerpt`

            return (
              <article key={entry.slug} className="overflow-hidden rounded-[2rem] border border-velmora-ink/10 bg-velmora-pearl shadow-card">
                <img
                  alt={entry.title}
                  className="h-[320px] w-full object-cover"
                  data-strk-img-id={`journal-${entry.slug}-img-31zp`}
                  data-strk-img={`[${excerptId}] [${titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-8">
                  <p className="velmora-eyebrow">Editorial note</p>
                  <h2 id={titleId} className="mt-4 font-display text-4xl text-velmora-ink">
                    {entry.title}
                  </h2>
                  <p id={excerptId} className="mt-4 text-sm leading-7 text-velmora-truffle">
                    {entry.excerpt}
                  </p>
                  <button type="button" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-gold">
                    Read Story
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default JournalPage
