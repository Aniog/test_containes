import { Link } from "react-router-dom"

const POSTS = [
  {
    id: "how-to-style-huggies",
    title: "How to Style Gold Huggies for Every Occasion",
    excerpt:
      "From the office to evening out, the humble huggie is the most versatile earring in your collection.",
    category: "Styling",
  },
  {
    id: "caring-for-gold-plated",
    title: "Caring for Your Gold Plated Jewelry",
    excerpt:
      "Simple rituals to keep your demi-fine pieces glowing for years to come.",
    category: "Care Guide",
  },
  {
    id: "the-art-of-gifting",
    title: "The Art of Gifting Fine Jewelry",
    excerpt:
      "How to choose a piece that says everything, without saying a word.",
    category: "Gifting",
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
            Stories & Guides
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            The Journal
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] bg-sand overflow-hidden mb-5">
                <div className="w-full h-full bg-gradient-to-br from-sand to-line" />
              </div>
              <p className="text-xs uppercase tracking-widest2 text-champagne mb-2">
                {post.category}
              </p>
              <h2 className="font-serif text-2xl text-ink mb-3 group-hover:text-champagne transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-stone leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="text-xs uppercase tracking-widest2 text-ink border-b border-ink pb-0.5 hover:text-champagne hover:border-champagne transition-colors"
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
