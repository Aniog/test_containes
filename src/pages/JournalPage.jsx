import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getStrkImageSrc, journalEntries } from '@/data/storefront'
import useStrkImages from '@/hooks/useStrkImages.jsx'

function JournalPage() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="pt-28 sm:pt-32">
      <section className="page-shell py-12 sm:py-16">
        <div className="max-w-3xl space-y-5">
          <p className="eyebrow">Journal</p>
          <h1 className="font-display text-5xl leading-none text-ink sm:text-6xl">
            Notes on styling, gifting, and keeping your favorites luminous.
          </h1>
          <p className="text-base leading-8 text-muted">
            A calm editorial space for discovering how to wear, care for, and gift your Velmora pieces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {journalEntries.map((entry, index) => {
            const titleId = `journal-title-${index}`
            const descId = `journal-desc-${index}`
            const imageId = `journal-card-${index}-2c1`

            return (
              <article key={entry.slug} className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card">
                <img
                  alt={entry.title}
                  className="aspect-[4/3] w-full object-cover"
                  data-strk-img={`[${descId}] [${titleId}] quiet luxury jewelry editorial still life`}
                  data-strk-img-id={imageId}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1000"
                  src={getStrkImageSrc(imageId)}
                />
                <div className="space-y-4 p-6">
                  <p className="eyebrow">{entry.category}</p>
                  <h2 className="font-display text-3xl leading-none text-ink" id={titleId}>
                    {entry.title}
                  </h2>
                  <p className="text-sm leading-7 text-muted" id={descId}>
                    {entry.excerpt}
                  </p>
                  <Link className="accent-link" to="/shop">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
