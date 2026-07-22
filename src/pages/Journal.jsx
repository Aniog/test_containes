import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { StrkImage } from "@/components/StrkImage"
import { Reveal } from "@/components/Reveal"

const POSTS = [
  {
    id: "layering-guide",
    tag: "Styling",
    title: "The Quiet Art of the Ear Stack",
    excerpt: "Three piercings, five pieces, endless combinations — our stylists break down the layered lobe, from first hole to helix.",
    date: "July 2026",
  },
  {
    id: "care-ritual",
    tag: "Care",
    title: "How to Make Gold Plating Last for Years",
    excerpt: "A two-minute nightly ritual, the products to avoid, and why your jewelry box matters more than you think.",
    date: "June 2026",
  },
  {
    id: "gift-edit",
    tag: "Gifting",
    title: "The Gift Edit: Pieces That Say What You Can't",
    excerpt: "For the friend who has everything, the mother who wants nothing, and the version of you that deserves something.",
    date: "June 2026",
  },
  {
    id: "demi-fine-explained",
    tag: "Education",
    title: "Demi-Fine, Explained Honestly",
    excerpt: "What the term actually means, how it compares to fine and fashion jewelry, and when each tier makes sense.",
    date: "May 2026",
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="border-b border-line bg-cream">
        <div className="container py-12 text-center md:py-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">
            Notes from the Atelier
          </p>
          <h1 id="journal-heading" className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl">
            The Journal
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Styling notes, care rituals and honest conversations about jewelry.
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid gap-x-5 gap-y-12 md:grid-cols-2">
          {POSTS.map((post, i) => {
            const titleId = `journal-${post.id}-title`
            const excerptId = `journal-${post.id}-excerpt`
            return (
              <Reveal key={post.id} delay={(i % 2) * 90}>
                <Link to="/journal" className="group block" onClick={(e) => e.preventDefault()}>
                  <div className="aspect-[3/2] overflow-hidden rounded-sm bg-cream">
                    <StrkImage
                      imgId={`journal-${post.id}-8c3f`}
                      query={`[${excerptId}] [${titleId}] [journal-heading] warm editorial gold jewelry photography`}
                      ratio="3x2"
                      width={900}
                      alt={post.title}
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]">
                    <span className="text-bronze">{post.tag}</span>
                    <span className="size-1 rounded-full bg-line" />
                    <span className="text-ink-soft">{post.date}</span>
                  </div>
                  <h2
                    id={titleId}
                    className="mt-3 font-serif text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-bronze md:text-3xl"
                  >
                    {post.title}
                  </h2>
                  <p id={excerptId} className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-colors group-hover:text-bronze">
                    Read the Story <ArrowRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
