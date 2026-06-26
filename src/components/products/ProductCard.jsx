import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export function ProductCard({ product, className }) {
  return (
    <article
      className={cn(
        'group flex flex-col bg-white border border-line rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-steel/30',
        className
      )}
    >
      <Link
        to={`/products/${product.slug}`}
        className="block overflow-hidden aspect-[4/3] bg-surface"
      >
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-copper mb-2">
          {product.category}
        </span>
        <h3
          id={product.titleId}
          className="text-lg font-bold text-ink mb-2"
        >
          <Link to={`/products/${product.slug}`} className="hover:text-steel transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {product.summary}
        </p>
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-steel hover:text-copper transition-colors"
        >
          View details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
