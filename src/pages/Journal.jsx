import { Link } from "react-router-dom"

const posts = [
  {
    id: "how-to-style-huggies",
    title: "How to Style Huggies for a Curated Ear",
    excerpt:
      "The art of the stacked ear, from a single dome huggie to a full constellation.",
    category: "Styling",
  },
  {
    id: "gold-plating-explained",
    title: "18K Gold Plating, Explained",
    excerpt:
      "What gold plating really means, and how to keep your pieces gleaming for years.",
    category: "Materials",
  },
  {
    id: "gifting-guide",
    title: "The Velmora Gifting Guide",
    excerpt:
      "Thoughtful picks for milestones, anniversaries, and the just-because moments.",
    category: "Gifting",
  },
]

export default function Journal() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="border-b border-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Notes</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            The Journal
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Styling notes, material stories, and gifting inspiration.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-sand/40">
                <div className="h-full w-full bg-gradient-to-br from-sand to-gold/20" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gold">
                {post.category}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-ink group-hover:text-gold">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-block border-b border-ink pb-0.5 text-xs uppercase tracking-[0.18em] text-ink hover:border-gold hover:text-gold"
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
