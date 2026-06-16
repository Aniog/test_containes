import { ArrowUpRight } from 'lucide-react'
import { PRODUCTS } from '@/data/site'

export default function Products() {
  return (
    <section id="products" className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
          <div className="max-w-2xl">
            <p className="eyebrow">The product line</p>
            <h2 className="mt-4 section-title">
              Seven machines.
              <br />
              One standard of accuracy.
            </h2>
          </div>
          <p className="max-w-md text-base text-steel-600 leading-relaxed">
            Every product shares the same ARTITECT DNA — stress-relieved
            frame, ground ways, closed-loop control. The right machine is
            the one that matches the work in front of you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }) {
  const cardTitleId = `product-${product.id}-title`
  const cardSummaryId = `product-${product.id}-summary`
  const cardEyebrowId = `product-${product.id}-eyebrow`

  return (
    <article
      className="group relative flex flex-col bg-ink-50 rounded-md border border-line overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300"
      style={{ transitionDelay: `${index * 30}ms` }}
    >
      <div className="relative aspect-[4/3] bg-ink-900 overflow-hidden">
        <img
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={`product-img-${product.id}`}
          data-strk-img={`[${cardSummaryId}] [${cardTitleId}] [${cardEyebrowId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="640"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-900/20 to-transparent"
        />
        <span
          id={cardEyebrowId}
          className="absolute top-4 left-4 inline-flex items-center px-3 py-1 text-[10px] font-semibold uppercase tracking-widest-2 text-ink-900 bg-copper-500 rounded-sm shadow-soft"
        >
          {product.eyebrow}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-7">
        <h3
          id={cardTitleId}
          className="font-display text-2xl text-ink-900 leading-tight"
        >
          {product.title}
        </h3>
        <p
          id={cardSummaryId}
          className="mt-3 text-sm text-steel-600 leading-relaxed flex-1"
        >
          {product.summary}
        </p>

        <ul className="mt-5 space-y-2">
          {product.capabilities.map((cap) => (
            <li
              key={cap}
              className="flex items-center gap-2 text-xs text-steel-600"
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-copper-500"
              />
              {cap}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-copper-600 transition-colors"
        >
          Request specifications
          <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
        </a>
      </div>
    </article>
  )
}
