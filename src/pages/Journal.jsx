import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    id: "j1",
    title: "How to Layer Gold Necklaces Without Tangles",
    excerpt: "The art of stacking chains at different lengths for an effortless look.",
    category: "Styling",
  },
  {
    id: "j2",
    title: "Caring for 18K Gold Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces glowing for years to come.",
    category: "Care Guide",
  },
  {
    id: "j3",
    title: "The Story Behind the Royal Heirloom Set",
    excerpt: "Inside the design process of our most giftable duo.",
    category: "Behind the Design",
  },
]

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Read</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">The Journal</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Styling notes, care guides, and stories from the studio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                <div
                  className="h-full w-full bg-line transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`journal-${post.id}`}
                  data-strk-bg={`[journal-excerpt-${post.id}] [journal-title-${post.id}]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                />
              </div>
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-gold">
                {post.category}
              </p>
              <h2
                id={`journal-title-${post.id}`}
                className="mt-2 font-serif text-2xl leading-snug text-ink"
              >
                {post.title}
              </h2>
              <p
                id={`journal-excerpt-${post.id}`}
                className="mt-2 text-sm leading-relaxed text-stone"
              >
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
