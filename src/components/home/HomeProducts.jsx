import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PRODUCTS } from '@/data/products'

export default function HomeProducts() {
  const featured = PRODUCTS.slice(0, 3)

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-ember" />
              <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">Featured Machines</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight">
              A folder for every fabricator.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ink hover:text-ember transition-colors"
          >
            See full catalogue
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((p) => {
            const titleId = `home-product-${p.slug}-title`
            const shortId = `home-product-${p.slug}-short`
            return (
              <article
                key={p.slug}
                className="group bg-paper border border-silver/40 hover:border-ink transition-colors"
              >
                <div className="relative aspect-[4/3] bg-mist overflow-hidden">
                  <img
                    alt={p.name}
                    data-strk-img-id={`home-${p.imgId}`}
                    data-strk-img={`[${shortId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <div className="text-xs uppercase tracking-[0.2em] text-ember">{p.line}</div>
                  <h3 id={titleId} className="mt-3 font-serif text-2xl text-ink font-medium leading-snug">
                    {p.name}
                  </h3>
                  <p id={shortId} className="mt-3 text-steel leading-relaxed">
                    {p.short}
                  </p>
                  <Link
                    to={`/products/${p.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ink hover:text-ember transition-colors"
                  >
                    View specs
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
