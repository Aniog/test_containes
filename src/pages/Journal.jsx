import { Link } from "react-router-dom"

const posts = [
  {
    id: "p1",
    title: "How to Layer Gold Necklaces",
    excerpt: "A simple guide to building a layered look that feels effortless.",
    category: "Styling",
  },
  {
    id: "p2",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Keep your pieces glowing for years with these simple habits.",
    category: "Care",
  },
  {
    id: "p3",
    title: "The Quiet Luxury Edit",
    excerpt: "Why understated gold is the defining look of the season.",
    category: "Edit",
  },
]

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="border-b border-champagne bg-sand">
        <div className="mx-auto max-w-editorial px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Notes</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-6xl">The Journal</h1>
        </div>
      </div>

      <div className="mx-auto max-w-editorial px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] bg-sand" />
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-gold">{post.category}</p>
              <h2 className="mt-2 font-serif text-2xl text-ink group-hover:text-gold">{post.title}</h2>
              <p className="mt-2 text-sm text-stone">{post.excerpt}</p>
              <span className="mt-3 inline-block text-[11px] uppercase tracking-widest2 text-ink underline-offset-4 group-hover:text-gold group-hover:underline">
                Read More →
              </span>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink px-10 py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
