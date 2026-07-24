import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const posts = [
  {
    id: 1,
    title: "How to Style Gold Jewelry for Every Day",
    excerpt:
      "Simple tricks to make your demi-fine pieces feel fresh from coffee runs to candlelit dinners.",
    date: "July 18, 2026",
  },
  {
    id: 2,
    title: "The Gift Guide: Thoughtful Jewelry Picks",
    excerpt:
      "From birthdays to just-because moments, discover pieces that say exactly what you mean.",
    date: "July 10, 2026",
  },
  {
    id: 3,
    title: "Caring for 18K Gold Plated Jewelry",
    excerpt:
      "Keep your Velmora pieces shining with our easy care and storage tips.",
    date: "June 28, 2026",
  },
]

export default function Journal() {
  return (
    <section className="bg-velmora-cream px-4 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="font-sans text-xs uppercase tracking-widest text-velmora-gold">
          Journal
        </p>
        <h1 className="mt-2 font-serif text-4xl text-velmora-espresso md:text-5xl">
          Stories & Style Notes
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group border border-velmora-espresso/10 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <p className="text-xs text-velmora-taupe">{post.date}</p>
              <h2 className="mt-3 font-serif text-xl text-velmora-espresso transition-colors group-hover:text-velmora-gold">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-velmora-mocha">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            variant="outline"
            className="uppercase tracking-label"
          >
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
