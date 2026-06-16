import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { products } from '@/data/catalog'

export default function ProductFamily() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32"
      aria-labelledby="family-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-80 w-80 rounded-full bg-brass/10 blur-3xl" />

      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p
              id="family-eyebrow"
              className="eyebrow eyebrow-line text-brass"
            >
              <span>The product family</span>
            </p>
            <h2
              id="family-title"
              className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
            >
              One family, seven machines — one engineering standard.
            </h2>
          </div>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brass transition-colors hover:text-brass-2"
          >
            View full specifications
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition-all duration-300 hover:-translate-y-1 hover:border-brass/40 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-3">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [family-eyebrow] [family-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-brass/40 bg-ink-2/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-eyebrow text-brass backdrop-blur">
                    {product.eyebrow}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p
                  id={product.tagId}
                  className="text-xs font-medium uppercase tracking-eyebrow text-brass"
                >
                  {product.family}
                </p>
                <h3
                  id={product.titleId}
                  className="mt-2 text-xl font-semibold tracking-tight text-white"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 line-clamp-3 text-sm leading-relaxed text-steel"
                >
                  {product.summary}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-eyebrow text-steel">
                  <span>Explore</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-brass transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
