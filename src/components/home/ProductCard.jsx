import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="card group">
      <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
        <img
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-strk-img-id={`product-${product.id}-img`}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [products-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
        />
      </div>
      <div className="p-6">
        <h3 id={`${product.id}-title`} className="text-xl font-bold text-slate-900 mb-2">
          {product.title}
        </h3>
        <p id={`${product.id}-desc`} className="text-slate-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        <Link
          to={`/products#${product.slug}`}
          className="inline-flex items-center text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}
