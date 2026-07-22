import { Link } from "react-router-dom"

const posts = [
  {
    id: "how-to-style-huggies",
    title: "How to Style Gold Huggies",
    excerpt: "Three ways to wear the everyday huggie — solo, stacked, or mixed metal.",
    category: "Styling",
  },
  {
    id: "caring-for-gold-plated",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces glowing for years to come.",
    category: "Care",
  },
  {
    id: "the-gift-of-velmora",
    title: "The Gift of Velmora",
    excerpt: "A short guide to gifting demi-fine jewelry for every milestone.",
    category: "Gifting",
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-sand">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl text-espresso font-light">The Journal</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="border-t border-sand pt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3">{post.category}</p>
              <h2 className="font-serif text-2xl text-espresso leading-snug">{post.title}</h2>
              <p className="mt-3 text-cocoa text-sm leading-relaxed">{post.excerpt}</p>
              <Link
                to="/journal"
                className="mt-5 inline-block text-[11px] uppercase tracking-[0.2em] text-espresso border-b border-espresso pb-1 hover:text-gold-deep hover:border-gold-deep transition-colors"
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
