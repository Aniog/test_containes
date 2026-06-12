import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { products } from '../../lib/products'

export default function ProductsPreview() {
  const featured = products.slice(0, 3)

  return (
    <section className="bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-xl">
            <p
              id="featured-eyebrow"
              className="text-xs uppercase tracking-[0.2em] text-steel mb-5"
            >
              The collection
            </p>
            <h2
              id="featured-title"
              className="font-serif text-3xl md:text-5xl font-medium text-ink leading-tight"
            >
              Three machines, one philosophy.
            </h2>
          </div>
          <Link
            to="/products"
            className="text-sm tracking-wide text-ink border-b border-ink pb-1 hover:border-accent hover:text-accent transition"
          >
            View all machines →
          </Link>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-mist/50 border border-mist/50">
          {featured.map((p) => (
            <article key={p.id} className="bg-paper group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-graphite">
                <img
                  alt={p.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] [featured-title] sheet metal folder machine`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {p.tagline}
                </p>
                <h3
                  id={p.titleId}
                  className="mt-3 font-serif text-2xl text-ink"
                >
                  {p.name}
                </h3>
                <p
                  id={p.descId}
                  className="mt-3 text-sm text-steel leading-relaxed flex-1"
                >
                  {p.summary}
                </p>
                <div className="mt-6 pt-5 border-t border-mist/60 flex items-center justify-between text-xs text-steel">
                  <span>{p.capacity}</span>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-ink hover:text-accent transition"
                  >
                    Details <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
