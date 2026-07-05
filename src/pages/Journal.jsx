import { Link } from "react-router-dom"

const posts = [
  { id: 1, title: "How to Style Gold Huggies for Every Day", excerpt: "Three effortless ways to wear the everyday hoop.", date: "Jun 18, 2026" },
  { id: 2, title: "The Quiet Luxury of Demi-Fine Jewelry", excerpt: "Why 18K gold over sterling is the modern heirloom.", date: "Jun 02, 2026" },
  { id: 3, title: "A Gift Guide: Jewelry for Every Milestone", excerpt: "From first anniversaries to just-because moments.", date: "May 21, 2026" },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-4">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light">The Journal</h1>
          <p className="mt-5 text-stone">Styling notes, care guides, and stories from the studio.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24 grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((p) => (
          <article key={p.id} className="border-t border-ink/15 pt-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{p.date}</p>
            <h2 className="font-serif text-2xl mt-3 leading-snug">{p.title}</h2>
            <p className="mt-3 text-stone leading-relaxed">{p.excerpt}</p>
            <Link
              to="/journal"
              className="inline-block mt-4 text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep transition-colors"
            >
              Read More
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}
