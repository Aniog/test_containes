import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import Stars from '@/components/ui/Stars'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tone || 'gold', quantity: 1 })
  }

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-luxury group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] worn ${product.name}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-luxury group-hover:opacity-100"
        />

        {/* Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badges.map((b) => (
              <span
                key={b}
                className="bg-cream/90 text-ink text-[10px] tracking-[0.2em] uppercase px-2.5 py-1"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 ease-luxury group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-cream/95 text-ink text-xs tracking-[0.2em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-champagne hover:text-cream transition-colors"
          >
            <Plus width={14} height={14} strokeWidth={2} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-[0.15em] leading-tight"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <Stars rating={product.rating} size={12} />
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium mt-1.5">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
