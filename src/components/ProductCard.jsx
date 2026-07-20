import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0]

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (defaultVariant?.inStock) {
      addItem(product, defaultVariant.id)
    }
  }

  return (
    <article
      className="group animate-fadeIn"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-velmora-stone">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <img
            data-strk-img-id={`product-card-${product.id}`}
            data-strk-img={`[product-card-title-${product.id}] [product-card-desc-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-lux ${
              hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
            }`}
            loading="lazy"
          />
          <img
            data-strk-img-id={`product-card-hover-${product.id}`}
            data-strk-img={`[product-card-title-${product.id}] ${product.hoverQuery}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-lux ${
              hovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
            }`}
            loading="lazy"
          />
        </Link>

        <div
          className={`absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-500 ease-lux ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={handleAdd}
            disabled={!defaultVariant?.inStock}
            className="inline-flex items-center gap-2 rounded-full bg-velmora-ink px-6 py-3 text-xs font-medium uppercase tracking-widest text-velmora-ivory shadow-lg transition hover:bg-velmora-charcoal disabled:opacity-50"
          >
            <ShoppingBag size={14} />
            {defaultVariant?.inStock ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>

        {product.badges.includes('new') && (
          <span className="absolute left-3 top-3 bg-velmora-ivory px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-velmora-ink shadow-sm">
            New
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute right-3 top-3 bg-velmora-rust px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-velmora-ivory shadow-sm">
            Sale
          </span>
        )}
      </div>

      <Link to={`/product/${product.id}`} className="block text-center">
        <h3
          id={`product-card-title-${product.id}`}
          className="font-serif text-sm font-medium uppercase tracking-widest text-velmora-ink"
        >
          {product.name}
        </h3>
        <p
          id={`product-card-desc-${product.id}`}
          className="mt-1 text-xs font-light text-velmora-warmgray"
        >
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[10px] text-velmora-taupe">({product.reviewCount})</span>
        </div>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-sm font-medium text-velmora-ink">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-velmora-taupe line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </Link>
    </article>
  )
}
