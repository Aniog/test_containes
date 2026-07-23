import { Link } from "react-router-dom"

const posts = [
  {
    id: "j1",
    title: "How to Layer Necklaces Without the Tangle",
    excerpt: "A simple formula for stacking chains at every length.",
    tag: "Styling",
  },
  {
    id: "j2",
    title: "Caring for Gold-Plated Jewelry",
    excerpt: "Keep your pieces warm and luminous for years to come.",
    tag: "Care",
  },
  {
    id: "j3",
    title: "The Ear Stack, Decoded",
    excerpt: "From huggies to cuffs, building a stack that's yours.",
    tag: "Styling",
  },
]

export default function Journal() {
  return (
    <div className="pt-20">
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Notes
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">The Journal</h1>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((p) => (
            <article key={p.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-sand mb-5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-sand to-line transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-2">
                {p.tag}
              </p>
              <h2 className="font-serif text-2xl text-ink mb-2 group-hover:text-gold transition-colors">
                {p.title}
              </h2>
              <p className="text-sm text-stone leading-relaxed">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 text-center">
        <Link
          to="/shop"
          className="inline-block border border-ink text-ink text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-ink hover:text-ivory transition-colors"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  )
}
