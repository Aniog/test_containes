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
    title: "Caring for 18K Gold Plated Jewelry",
    excerpt: "Keep your pieces glowing with these everyday care rituals.",
    category: "Care",
  },
  {
    id: "p3",
    title: "The Quiet Luxury Edit",
    excerpt: "Why restraint is the new statement — and how to wear it.",
    category: "Edit",
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-sand">
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Notes
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-espresso">
            The Journal
          </h1>
          <p className="mt-4 text-cocoa max-w-xl mx-auto">
            Styling notes, care rituals, and stories from the Velmora studio.
          </p>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-cream overflow-hidden">
                <div className="w-full h-full bg-sand transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-gold">
                {post.category}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-espresso group-hover:text-gold transition-colors duration-300">
                {post.title}
              </h2>
              <p className="mt-2 text-cocoa leading-relaxed">{post.excerpt}</p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.25em] text-espresso border-b border-gold pb-1">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center pb-20">
        <Link
          to="/shop"
          className="inline-block border border-espresso text-espresso text-[11px] uppercase tracking-[0.25em] px-10 py-4 hover:bg-espresso hover:text-ivory transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
