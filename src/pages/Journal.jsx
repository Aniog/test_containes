import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const POSTS = [
  {
    id: "p1",
    imgId: "journal-styling-1a2b",
    title: "How to Layer Gold Necklaces",
    excerpt: "A simple guide to mixing lengths and pendants for an effortless layered look.",
    category: "Styling",
    query: "layered gold necklaces worn on neck styling",
  },
  {
    id: "p2",
    imgId: "journal-care-3c4d",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Keep your pieces glowing for longer with these simple daily habits.",
    category: "Care",
    query: "gold jewelry care cleaning soft cloth",
  },
  {
    id: "p3",
    imgId: "journal-gifting-5e6f",
    title: "The Art of Gifting Jewelry",
    excerpt: "How to choose a piece that feels personal, whatever the occasion.",
    category: "Gifting",
    query: "gold jewelry gift box ribbon elegant",
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <div className="border-b border-sand">
        <div className="mx-auto max-w-8xl px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">The Journal</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Notes on Jewelry</h1>
          <p className="mt-4 text-stone max-w-md mx-auto">
            Styling, care and stories from the Velmora studio.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-8xl px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand/30">
                <img
                  src={PLACEHOLDER}
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={post.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-gold">
                {post.category}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-ink leading-tight group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-stone leading-relaxed">{post.excerpt}</p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.25em] text-ink border-b border-gold pb-1">
                Read More
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream-soft text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Coming Soon</h2>
          <p className="mt-4 text-stone">
            We are writing more notes on jewelry, styling and care. Check back soon.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block text-[11px] uppercase tracking-[0.3em] text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
