import { Link } from "react-router-dom"

const POSTS = [
  {
    id: "styling-huggies",
    title: "How to Style Huggies for Every Day",
    excerpt: "Three ways to wear the dome huggie, from desk to dinner.",
  },
  {
    id: "gold-care",
    title: "Caring for Gold-Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces warm and luminous.",
  },
  {
    id: "gifting-guide",
    title: "A Gifting Guide for the Modern Woman",
    excerpt: "Considered picks for the people you treasure most.",
  },
]

export default function Journal() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-10 md:pb-28">
        <p className="font-sans text-xs uppercase tracking-widest2 text-gold">
          The Journal
        </p>
        <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">
          Notes & Stories
        </h1>
        <p className="mt-4 max-w-lg font-sans text-sm text-stone">
          Styling notes, care rituals, and stories from the studio.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] bg-sand" />
              <p className="mt-5 font-sans text-[11px] uppercase tracking-widest2 text-gold">
                Styling
              </p>
              <h2 className="mt-2 font-serif text-2xl text-ink group-hover:text-gold">
                {post.title}
              </h2>
              <p className="mt-2 font-sans text-sm text-stone">{post.excerpt}</p>
              <Link
                to="/journal"
                className="mt-4 inline-block font-sans text-[11px] uppercase tracking-widest2 text-ink border-b border-gold pb-0.5 hover:text-gold"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
