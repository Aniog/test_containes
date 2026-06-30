import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-cream-deep aspect-[4/5]">
        {/* Primary image */}
        <img
          src={PLACEHOLDER}
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          src={PLACEHOLDER}
          alt={product.name}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] ${product.name} worn detail`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Gallery image registrations (hidden, used by PDP gallery) */}
        <img
          src={PLACEHOLDER}
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgId3}
          data-strk-img={`[${product.descId}] [${product.titleId}] close up`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
        />
        <img
          src={PLACEHOLDER}
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgId4}
          data-strk-img={`[${product.descId}] ${product.name} styled`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-espresso-800/95 text-cream text-xs uppercase tracking-widest2 py-3 flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-[11px] text-espresso-500 tracking-wide">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <h3
          id={product.titleId}
          className="product-name text-sm text-espresso-800 group-hover:text-gold transition-colors"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <p className="text-sm text-espresso-700 mt-1.5 font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
