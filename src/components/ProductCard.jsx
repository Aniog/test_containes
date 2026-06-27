import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tones[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[4/5]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image revealed on hover */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] worn ${product.name}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory/90 text-ink text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-ink/90 text-ivory text-[11px] uppercase tracking-[0.22em] py-3 hover:bg-gold transition-colors duration-300 backdrop-blur-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg uppercase tracking-[0.14em] text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-ink-soft">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <p className="text-sm text-ink mt-1.5 font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
