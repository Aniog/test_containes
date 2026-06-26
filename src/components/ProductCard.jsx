import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
      <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center p-8">
        <div
          data-strk-bg-id={`product-card-bg-${product.id}`}
          data-strk-bg={`[product-card-name-${product.id}] sheet metal folding machine industrial`}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="600"
          className="w-full h-full rounded-lg bg-brand-200 flex items-center justify-center"
        >
          <span className="text-brand-400 text-sm font-medium">Product Image</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          id={`product-card-name-${product.id}`}
          className="text-lg font-semibold text-brand-900 mb-2"
        >
          {product.name}
        </h3>
        <p className="text-brand-600 text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-600 transition-colors group/link"
        >
          Request Info
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
