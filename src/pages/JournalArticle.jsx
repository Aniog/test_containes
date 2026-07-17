import { Navigate, Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getJournalNoteBySlug, journalNotes } from '@/data/store'

const JournalArticle = () => {
  const { slug } = useParams()
  const article = getJournalNoteBySlug(slug)

  if (!article) {
    return <Navigate to="/#journal" replace />
  }

  const relatedNotes = journalNotes.filter((note) => note.slug !== article.slug).slice(0, 2)

  return (
    <div className="bg-velmora-pearl pt-28 md:pt-36">
      <section className="page-shell pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/#journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-velmora-ink/60 transition-colors hover:text-velmora-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Journal
          </Link>

          <div className="mt-8 rounded-[2.5rem] border border-velmora-sand/70 bg-velmora-mist px-6 py-8 shadow-soft md:px-10 md:py-12">
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
              {article.category} · {article.readingTime}
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl leading-none tracking-[0.06em] text-velmora-ink md:text-7xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-velmora-ink/75 md:text-lg">
              {article.lede}
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start">
            <article className="rounded-[2rem] border border-velmora-sand/70 bg-velmora-pearl p-1 text-velmora-ink">
              <div className="rounded-[1.75rem] bg-velmora-pearl px-5 py-2 md:px-8 md:py-6">
                <p className="border-b border-velmora-sand/70 pb-6 text-lg leading-8 text-velmora-ink/85 md:text-xl">
                  {article.excerpt}
                </p>
                <div className="space-y-6 py-8 text-base leading-8 text-velmora-ink/78 md:text-lg">
                  {article.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-32">
              <div className="rounded-[2rem] border border-velmora-sand/70 bg-velmora-mist p-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                  Continue the edit
                </p>
                <p className="mt-4 text-sm leading-7 text-velmora-ink/75">
                  {article.sidebar}
                </p>
                <Link to={article.shopHref} className="button-primary mt-6 w-full">
                  {article.ctaLabel}
                </Link>
              </div>

              <div className="rounded-[2rem] border border-velmora-sand/70 bg-velmora-pearl p-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                  More from the journal
                </p>
                <div className="mt-5 space-y-4">
                  {relatedNotes.map((note) => (
                    <Link
                      key={note.slug}
                      to={`/journal/${note.slug}`}
                      className="group block border-b border-velmora-sand/70 pb-4 last:border-b-0 last:pb-0"
                    >
                      <p className="text-[11px] uppercase tracking-[0.28em] text-velmora-ink/55 transition-colors group-hover:text-velmora-gold">
                        {note.category}
                      </p>
                      <div className="mt-2 flex items-start justify-between gap-3">
                        <p className="font-heading text-2xl leading-tight text-velmora-ink">
                          {note.title}
                        </p>
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-velmora-ink/45 transition-colors group-hover:text-velmora-gold" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JournalArticle
