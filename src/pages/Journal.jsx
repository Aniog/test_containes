import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const POSTS = [
  {
    id: "journal-1",
    title: "How to Layer Gold Necklaces",
    excerpt: "A simple guide to mixing chain lengths and weights for an effortless layered look.",
    category: "Styling",
    imgId: "journal-1-a1",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "journal-2",
    title: "Caring for Gold-Plated Jewelry",
    excerpt: "Keep your pieces glowing for years with a few simple habits.",
    category: "Care",
    imgId: "journal-2-a1",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "journal-3",
    title: "The Quiet Luxury Edit",
    excerpt: "Why understated gold is the statement of the season — and every season.",
    category: "Edit",
    imgId: "journal-3-a1",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
  },
  {
    id: "journal-4",
    title: "Gifting, Considered",
    excerpt: "How to choose a piece that feels personal, without the guesswork.",
    category: "Gifting",
    imgId: "journal-4-a1",
    titleId: "journal-4-title",
    descId: "journal-4-desc",
  },
]

export default function Journal() {
  return (
    <div className="pt-20">
      <section className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center md:px-10 md:py-20">
          <p className="font-sans text-xs uppercase tracking-widest2 text-gold">Notes & Stories</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">The Journal</h1>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm text-stone">
            Styling notes, care guides, and quiet thoughts on jewelry worth wearing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 font-sans text-xs uppercase tracking-widest2 text-gold">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink md:text-3xl"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-3 font-sans text-sm leading-relaxed text-stone">
                {post.excerpt}
              </p>
              <Link
                to="/shop"
                className="mt-4 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest2 text-ink hover:text-gold"
              >
                Read More <ArrowRight width={12} height={12} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
