import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const entries = [
  {
    id: "j-1",
    title: "How we finish a piece",
    excerpt:
      "From brass to 18K gold — a quiet, careful process. A short film from the studio.",
    date: "July 2026",
  },
  {
    id: "j-2",
    title: "On buying your first piece of fine jewelry",
    excerpt:
      "A few quiet things we'd tell a friend, on what to look for, what to skip, and how to wear it.",
    date: "June 2026",
  },
  {
    id: "j-3",
    title: "The huggie, considered",
    excerpt:
      "Why the huggie has become our most-loved silhouette, and how we engineered ours to feel almost weightless.",
    date: "May 2026",
  },
]

export default function JournalPage() {
  return (
    <div className="page-fade bg-ivory pt-28 md:pt-32">
      <div className="container-x pb-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Journal</span>
          <h1
            id="journal-title"
            className="h-section mt-3 text-5xl text-espresso md:text-6xl"
          >
            Notes from the studio.
          </h1>
        </div>

        <div className="mt-16 divide-y divide-hairline border-y border-hairline">
          {entries.map((e) => (
            <article key={e.id} className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[120px_1fr_auto] md:items-baseline md:gap-12">
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-taupe">
                {e.date}
              </p>
              <div>
                <h2 className="font-serif text-2xl text-espresso md:text-3xl">
                  {e.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-taupe md:text-base">
                  {e.excerpt}
                </p>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.22em] text-espresso hover:text-gold"
              >
                Read
                <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
